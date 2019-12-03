function generateHTML(data) {
    console.log(data)
    return `< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
            <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
                <title>Document</title>

                <style>
                    
                </style>
        </head>

            <body>
                
                html, body {
                    padding: 0;
                    margin: 0;
                    }
                    html, body, .wrapper {
                    height: 100%;
                    }
                    // .wrapper {
                    // background-color: ${colors[data.color].wrapperBackground};
                    // padding-top: 100px;
                    // }
                    body {
                    background-color: white;
                    -webkit-print-color-adjust: exact !important;
                    font-family: 'Cabin', sans-serif;
                    }
           

                <div class="card text-center">
                    <div class="card-header">
                      My Team
                    </div>
                    <div class="card-body">
                      <!-- <h5 class="card-title">Special title treatment</h5>
                      
                      <div class="row row-cols-1 row-cols-md-3">
                        <div class="col mb-4">
                          <div class="card">
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">${data.name}</h5>
                              <h5 class="card-title">Manager</h5>
                              <div class="card" style="width: 18rem;">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">${data.id}</li>
                                  <li class="list-group-item">${data.Email}</li>
                                  <li class="list-group-item">${data.Office_number}</li>
                                </ul>
                              </div>
                              <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                            </div>
                          </div>
                        </div>
                        <div class="col mb-4">
                          <div class="card">
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <div class="card" style="width: 18rem;">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">Cras justo odio</li>
                                  <li class="list-group-item">Dapibus ac facilisis in</li>
                                  <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                              </div>
                              <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                            </div>
                          </div>
                        </div>
                        <div class="col mb-4">
                          <div class="card">
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <div class="card" style="width: 18rem;">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">Cras justo odio</li>
                                  <li class="list-group-item">Dapibus ac facilisis in</li>
                                  <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                              </div>
                              <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> -->
                            </div>
                          </div>
                        </div>
                        <div class="col mb-4">
                          <div class="card">
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <div class="card" style="width: 18rem;">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">Cras justo odio</li>
                                  <li class="list-group-item">Dapibus ac facilisis in</li>
                                  <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                              </div>
                              <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                            </div>
                          </div>
                        </div>
                        <div class="col mb-4">
                            <div class="card">
                              <img src="..." class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <div class="card" style="width: 18rem;">
                                    <ul class="list-group list-group-flush">
                                      <li class="list-group-item">Cras justo odio</li>
                                      <li class="list-group-item">Dapibus ac facilisis in</li>
                                      <li class="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                  </div>
                                <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>

                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
            </body>
</html>`

}

module.exports = generateHTML