import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { NavServicesService } from './nav-services.service';
import { Navitems } from './navitems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private navService:NavServicesService){
    
  }
  title = 'AngularDemos';
    @ViewChild('appDrawer') appDrawer: any;
  navItems: Navitems [] = [
    {
      displayName: 'DevFestFL',
      iconName: 'recent_actors',
      IsCalled:0,
      children: [       
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          IsCalled:0,
          children: [
            {
              displayName: 'Jagdish',
              iconName: 'star_rate',
              IsCalled:0,
              children:[
                {
                  displayName:'Jagdish Sub',
                  iconName:'start_rate',
                  IsCalled:0
                }
              ]
            },
            {
              displayName: "What's up with the Web?",
              iconName: 'star_rate',
              route: 'what-up-web',
              IsCalled:0,
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'my-ally-cli',
              IsCalled:0,
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'become-angular-tailer',
              IsCalled:0,
            }
          ]
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'feedback',
          IsCalled:0,
        }
      ]
    },
    {
      displayName: 'Disney',
      iconName: 'videocam',
      IsCalled:0,
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          IsCalled:0,
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'michael-prentice',
              IsCalled:0,
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'material-design',
                  IsCalled:0,
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'stephen-fluin',
              IsCalled:0,
              children: [
                {
                  displayName: "What's up with the Web?",
                  iconName: 'star_rate',
                  route: 'what-up-web',
                  IsCalled:0,
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'mike-brocchi',
              IsCalled:0,
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli',
                  IsCalled:0,
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer',
                  IsCalled:0,
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          IsCalled:0,
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'star_rate',
              route: 'material-design',
              IsCalled:0,
            },
            {
              displayName: "What's up with the Web?",
              iconName: 'star_rate',
              route: 'what-up-web',
              IsCalled:0,
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'my-ally-cli',
              IsCalled:0,
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'become-angular-tailer',
              IsCalled:0,
            }
          ]
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'feedback',
          IsCalled:0,
        }
      ]
    },
    {
      displayName: 'Orlando',
      iconName: 'movie_filter',
      IsCalled:0,
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          IsCalled:0,
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'michael-prentice',
              IsCalled:0,
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'material-design',
                  IsCalled:0,
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'stephen-fluin',
              IsCalled:0,
              children: [
                {
                  displayName: "What's up with the Web?",
                  iconName: 'star_rate',
                  route: 'what-up-web',
                  IsCalled:0,
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'mike-brocchi',
              IsCalled:0,
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli',
                  IsCalled:0,
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer',
                  IsCalled:0,
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          IsCalled:0,
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'star_rate',
              route: 'material-design',
              IsCalled:0,
            },
            {
              displayName: "What's up with the Web?",
              iconName: 'star_rate',
              route: 'what-up-web',
              IsCalled:0,
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'my-ally-cli',

            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'become-angular-tailer',
              IsCalled:0,
            }
          ]
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'feedback',
          IsCalled:0,
        }
      ]
    },
    {
      displayName: 'Maleficent',
      disabled: true,
      iconName: 'report_problem',
      IsCalled:0,
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          IsCalled:0,
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'michael-prentice',
              IsCalled:0,
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'material-design',
                  IsCalled:0,
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'stephen-fluin',
              IsCalled:0,
              children: [
                {
                  displayName: "What's up with the Web?",
                  iconName: 'star_rate',
                  route: 'what-up-web',
                  IsCalled:0,
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'mike-brocchi',
              IsCalled:0,
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli',
                  IsCalled:0,
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer',
                  IsCalled:0,
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          IsCalled:0,
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'star_rate',
              route: 'material-design',
              IsCalled:0,
            },
            {
              displayName: "What's up with the Web?",
              iconName: 'star_rate',
              route: 'what-up-web',
              IsCalled:0,
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'my-ally-cli',
              IsCalled:0,
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'become-angular-tailer',
              IsCalled:0,
            }
          ]
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'feedback',
          IsCalled:0,
        }
      ]
    }
  ];
  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
