function renderRoleIcon() {
    for (const item of teamMembers) {
        if (item === Manager) {
            return `<i class="fas fa-mug-hot"></i>`;
        } if (item === Engineer) {
            return `<i class="fas fa-glasses"></i>`;
        } if (item === Intern) {
            return `<i class="fas fa-user-graduate"></i>`;
        }
    }
};

function renderSection() {
    for (const item of teamMembers) {
        if (item === Manager) {
            return `<section id="manager" class="team-card">
            <div class="card-header">
                <h2>${Manager.name}</h2>
                <h3>${renderRoleIcon()}<span> ${Manager.role}</span></h3>
            </div>
            <div class="card-body">
                <ul>
                    <li class="employee-id">ID: ${Manager.id}</li>
                    <li class="email">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                    <li id="office-number">Office number: ${Manager.officeNumber}</li>
                </ul>
            </div>
        </section>`
        } if (item === Engineer) {
            return `<section id="engineer" class="team-card">
            <div class="card-header">
                <h2>${Engineer.name}</h2>
                <h3>${renderRoleIcon()}<span> ${Engineer.role}</span></h3>
            </div>
            <div class="card-body">
                <ul>
                    <li class="employee-id">ID: ${Engineer.id}</li>
                    <li class="email">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
                    <li id="github">GitHub: <a href="https://github.com/${Engineer.github}" target="_blank">${Engineer.github}</a></li>
                </ul>
            </div>
        </section>`
        } if (item === Intern) {
            return `<section id="intern" class="team-card">
            <div class="card-header">
                <h2>${Intern.name}</h2>
                <h3>${renderRoleIcon()}<span> ${Intern.role}</span></h3>
            </div>
            <div class="card-body">
                <ul>
                    <li class="employee-id">ID: ${Intern.id}</li>
                    <li class="email">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
                    <li id="school">School: ${Intern.school}</li>
                </ul>
            </div>
        </section>`
        } 
    }
};

/* const generateHTML = (data) => {

    console.log(data);
} */

function generateHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UFT-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="sample.css" />
            <title>Team Profile Generator</title>
        </head>
    
        <body>
    
            <header>
                <h1>My Team</h1>       
            </header>
    
            <main>

            ${renderSection()}
            
            </main>

    </body>
</html>`

};

module.exports = {
    generateHTML
};