import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <section id="intro" class="intro image-background no-padding-top">
      <div class="overlay"></div>
      <div class="content">
        <div class="container clearfix">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-12">
              <img src="img/agnes.png" style="width:80%;" />
              <h1>Agnes<br />Strand-Lenda</h1>
              <p class="roboto">dåb den 15. Januar 2017</p>
            </div>
          </div>
        </div>
      </div><a href="#info" class="icon faa-float animated scroll-to"><i class="fa fa-angle-double-down"></i></a>
    </section>
    <!-- navbar-->
    <header class="header">
      <menu-section></menu-section>
    </header>
    <!-- /.navbar-->
    <!-- about us-->
    <section id="info"  class="no-padding-bottom">
      <info-section></info-section>
    </section>

    <section id="calendar" class="no-padding-bottom">
      <calendar-section></calendar-section>
    </section>
    <!-- services-->
    <section id="wishes"  class=" section-gray">
      <wishes-section></wishes-section>
    </section>
    <!-- portfolio-->

    <!-- text-->
    <section id="participate">
      <participate-section></participate-section>
    </section>
    <!-- team-->
    <section id="photos"  class=" section-gray">
      <photos-section></photos-section>
    </section>
    <!-- map-->
    <footer>
      <div class="container">
        <div class="row copyright">
          <div class="col-md-6">
            <p class="roboto">Vi ses den 15 januar 2017</p>
          </div>
        </div>
      </div>
    </footer>
    `,
})
export class AppComponent { }
