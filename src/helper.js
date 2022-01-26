const generateHTML = (data) => {

    console.log(data);
}

module.exports = (data) => {
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
            ${generateHTML(data)}
            </main>

    </body>
</html>`

}