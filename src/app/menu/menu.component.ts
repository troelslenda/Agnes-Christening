import { Component } from '@angular/core';

@Component({
    selector: 'menu-section',
    template: `
    <div class="sticky-wrapper">
            <div role="navigation" class="navbar navbar-default">
              <div class="container">
                <div class="navbar-header hidden-xs">
                  <a href="#intro" class="navbar-brand scroll-to">Agnes</a>
                </div>
                <div id="navigation">
                  <ul class="nav navbar-nav navbar-right">
                    <li><a href="#info">Information</a></li>
                    <li class="hidden-xs"><a href="#calendar">Kalender</a></li>
                    <li><a href="#wishes">Ønsker</a></li>
                    <li><a href="#participate">Deltagelse</a></li>
                    <li class="hidden-xs"><a href="#photos">Billeder</a></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
    `,
})
export class MenuComponent { }
