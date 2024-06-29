document.addEventListener('DOMContentLoaded', function () {
    fetch('/assets/json/projects.json')
        .then(response => response.json())
        .then(projectData => {
            const projectContainer = document.querySelector('.project-boxes-div');

            projectData.forEach(project => {
                const projectBoxWrapper = document.createElement('div');
                projectBoxWrapper.classList.add('project-box-wrapper');
                projectBoxWrapper.setAttribute('data-aos', 'fade-up');

                const projectBox = document.createElement('div');
                projectBox.classList.add('project-box', project.id);
                projectBox.setAttribute('id', project.id);

                const infoDiv = document.createElement('div');
                infoDiv.classList.add('info-div');

                const favicon = document.createElement('img');
                favicon.src = project.faviconSrc;
                favicon.alt = project.faviconAlt;
                favicon.classList.add('faviconforProject');

                const heading = document.createElement('article');
                heading.classList.add('ProjectHeading');
                heading.textContent = project.heading;

                const description = document.createElement('p');
                description.classList.add('ProjectDescription');
                description.textContent = project.description;

                const buttonsDiv = document.createElement('div');
                buttonsDiv.classList.add('project-buttons');

                if (project.githubLink) {
                    const githubLink = document.createElement('a');
                    githubLink.href = project.githubLink;
                    githubLink.target = '_blank';
                    githubLink.classList.add('github-redirect');
                    githubLink.setAttribute('aria-label', `Visit ${project.heading} on GitHub`);

                    const githubImg = document.createElement('img');
                    githubImg.src = '/assets/img/icons/github.png';
                    githubImg.alt = 'github redirect button';

                    githubLink.appendChild(githubImg);
                    buttonsDiv.appendChild(githubLink);
                }

                if (project.liveLink) {
                    const liveLink = document.createElement('a');
                    liveLink.href = project.liveLink;
                    liveLink.target = '_blank';
                    liveLink.classList.add('cta');
                    liveLink.setAttribute('aria-label', `Visit ${project.heading} Live`);

                    const liveSpan = document.createElement('span');
                    liveSpan.textContent = 'Live view';

                    const liveSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    liveSvg.setAttribute('viewBox', '0 0 13 10');
                    liveSvg.setAttribute('height', '10px');
                    liveSvg.setAttribute('width', '15px');

                    const livePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    livePath.setAttribute('d', 'M1,5 L11,5');

                    const livePolyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
                    livePolyline.setAttribute('points', '8 1 12 5 8 9');

                    liveSvg.appendChild(livePath);
                    liveSvg.appendChild(livePolyline);

                    liveLink.appendChild(liveSpan);
                    liveLink.appendChild(liveSvg);

                    buttonsDiv.appendChild(liveLink);
                }

                infoDiv.appendChild(favicon);
                infoDiv.appendChild(heading);
                infoDiv.appendChild(description);
                infoDiv.appendChild(buttonsDiv);

                const imageDiv = document.createElement('div');
                imageDiv.classList.add('image-div');

                const previewImg = document.createElement('img');
                previewImg.src = project.previewSrc;
                previewImg.alt = project.previewAlt;

                imageDiv.appendChild(previewImg);

                projectBox.appendChild(infoDiv);
                projectBox.appendChild(imageDiv);
                projectBoxWrapper.appendChild(projectBox);
                projectContainer.appendChild(projectBoxWrapper);
            });
        })
        .catch(error => console.error('Error fetching the project data:', error));
});