const homePage = `<div class="home">
        <h1>Home Page</h1>
        <img style="width:400px" src="https://uhighmidway.com/wp-content/uploads/2022/12/12-522-EC-energydrink.png" alt="Five energy drinks">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat
          maiores dolorem! Veritatis assumenda, eius perspiciatis cum
          recusandae, dicta cumque minus atque delectus tenetur saepe.
        </p>
        <p>
          Temporibus nesciunt a quasi, cum sed, eius numquam nam, corporis dolor
          explicabo optio rem. Corporis quaerat asperiores optio in magni qui,
          exercitationem explicabo ullam commodi.
        </p>
        <p>
          Omnis et delectus maiores, eius accusamus exercitationem, nobis minima
          iure quam dolorem, perspiciatis labore adipisci aliquam officiis
          accusantium doloremque numquam aspernatur vitae modi debitis commodi!
        </p>
      </div>`;
const aboutPage = `<div class="about">
        <h1>About Page</h1>
        <img style="width:400px" src="https://wsspaper.com/wp-content/uploads/2022/01/IMG_3917.jpg" alt="Ten energy drinks">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          voluptatum ea cumque pariatur velit at aspernatur temporibus sit
          blanditiis, saepe iste labore ipsa voluptas est molestiae minus dolor
          voluptates similique.
        </p>
        <p>
          Est numquam aut, similique autem amet reiciendis aperiam totam earum
          exercitationem cum quibusdam sit fugit excepturi eligendi adipisci
          labore accusamus dolor reprehenderit magni incidunt id. Provident odio
          molestiae minus animi.
        </p>
      </div>`;
const shopPage = `<div class="shop">
        <h1>Shop Page</h1>
        <img style="width:400px" src="https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2017/10/13/1024/512/694940094001_5609692211001_5609669481001-vs.jpg?ve=1&tl=1" alt="Six energy drinks">
        <img style="width:400px" src="https://www.asweetpeachef.com/wp-content/uploads/2021/01/are-energy-drinks-good-for-you-08.jpg" alt="Seven energy drinks">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, hic.
        </p>
        <p>
          Eum necessitatibus porro repellat fugit suscipit aperiam at harum
          facere?
        </p>
        <p>
          Culpa qui ex necessitatibus libero sequi, quia veritatis cupiditate
          voluptatibus.
        </p>
        <p>
          Repellendus culpa asperiores pariatur consequuntur neque tempora minus
          mollitia hic.
        </p>
      </div>`;
const contactPage = `<div class="contact">
<h1>Contact Page</h1>
<img style="width:400px" src="https://static01.nyt.com/images/2023/06/09/multimedia/08energydrinks-B1/00energydrinks-sub-hkfq-videoSixteenByNineJumbo1600.jpg" alt="Five energy drinks">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          obcaecati, tempore itaque aut repudiandae necessitatibus.
        </p>
      </div>`;

      export function changePage(pageName) {
        let pageVarName = pageName + "Page";
       console.log(pageVarName);
        $("#app").html(eval(pageVarName));
    }
    