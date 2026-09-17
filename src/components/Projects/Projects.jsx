import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './Projects.css';

const GITHUB_USERNAME = 'sacheetah30'; // change if this isn't your username

// Decode GitHub's base64 README content (handles UTF-8 properly)
const decodeBase64 = (base64String) => {
  try {
    
    const binary = atob(base64String.replace(/\n/g, ''));
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return new TextDecoder('utf-8').decode(bytes);
  } catch {
    return 'Could not load README for this project.';
  }
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      try {
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=public&sort=updated`
        );
        if (!reposRes.ok) throw new Error(`GitHub API error: ${reposRes.status}`);
        const repos = await reposRes.json();

        // Skip forks if you only want original work — remove this filter if you want forks too
        const ownRepos = repos.filter((repo) => !repo.fork);

        // Fetch each repo's README in parallel
        const withReadmes = await Promise.all(
          ownRepos.map(async (repo) => {
            try {
              const readmeRes = await fetch(
                `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/readme`
              );
              if (!readmeRes.ok) {
                return { ...repo, readme: null }; // no README present
              }
              const readmeData = await readmeRes.json();
              return { ...repo, readme: decodeBase64(readmeData.content) };
            } catch {
              return { ...repo, readme: null };
            }
          })
        );

        if (isMounted) {
          setProjects(withReadmes);
          setLoading(false);
        }
      } catch (err) {
        console.error('Failed to fetch GitHub projects:', err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    fetchProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  if (loading) {
    return (
      <section id="projects" className="projects-section">
        <h2 className="projects-heading">My Projects</h2>
        <p>Loading projects from GitHub...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="projects-section">
        <h2 className="projects-heading">My Projects</h2>
        <p>Couldn't load projects right now. Please check back later.</p>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">My Projects</h2>

      <div className="projects-list">
        {projects.length === 0 ? (
          <p>No public repositories found.</p>
        ) : (
          projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div
                className="project-card-header"
                onClick={() => toggleExpand(project.id)}
              >
                <div>
                  <h3>{project.name}</h3>
                  {project.description && (
                    <p className="project-short-desc">{project.description}</p>
                  )}
                </div>
                <span className={`chevron ${expandedId === project.id ? 'open' : ''}`}>
                  ▼
                </span>
              </div>

              {project.language && (
                <div className="tags">
                  <span className="tag">{project.language}</span>
                  {project.topics?.slice(0, 4).map((topic) => (
                    <span className="tag" key={topic}>{topic}</span>
                  ))}
                </div>
              )}

              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>

              {expandedId === project.id && (
                <div className="project-readme">
                  {project.readme ? (
                    <ReactMarkdown>{project.readme}</ReactMarkdown>
                  ) : (
                    <p>No README available for this project.</p>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
