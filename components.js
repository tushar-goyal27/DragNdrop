var componentList = {
  navbar: `<div class="component justAdded" ondblclick="this.contentEditable=true;" draggable="true" style="width: 105%;">
  <nav class="navbar navbar-dark bg-dark " draggable="true ">
  <!-- Navbar content -->
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>`,
    button: `<button class="btn btn-primary component justAdded" type="submit" draggable= "true" ondblclick="this.contentEditable=true;" ><span class="edit-text">Button</span</button>`,
    footer: `<footer class="text-center text-white component justAdded" draggable= "true" style="width: 105%;" ondblclick="this.contentEditable=true;">
        <!-- Grid container -->
        <div class="container pt-4" draggable= "false">
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);" draggable= "false">
          ©️ 2020 Copyright:
          <a class="text-dark" href="#" draggable= "false">Lesssgooo</a>
        </div>
        <!-- Copyright -->
      </footer>`,
      card: `<div class="card component justAdded" style="width: 18rem;" draggable= "true" ondblclick="this.contentEditable=true;">
        <div class="card-body" draggable="false">
          <h5 class="card-title" draggable="false">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted" draggable="false">Card subtitle</h6>
          <p class="card-text" draggable="false">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <!-- <a href="#" class="card-link" draggable="false">Card link</a>
          <a href="#" class="card-link" draggable="false">Another link</a> -->
        </div>
        </div>`,
      image: `<div class="card component justAdded" style="width: 18rem;" draggable="true">
<img class="card-img-top " draggable="false" src="https://files.worldwildlife.org/wwfcmsprod/images/Mountains_New_Hero_Image/hero_full/9gdovvknbu_mountains_hero.jpg" alt="Card image cap"></div>`,
      text: `<div class="card component justAdded" style="width: 18rem;" draggable="true">
<p class="card-text"  ondblclick="this.contentEditable=true;" draggable="false">INSERT SOME TEXT HERE</p></div> `
}
