import { Component, OnInit } from '@angular/core';

interface SideNavListItem {
  name: String,
  logoSrc: String
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent implements OnInit {

  sideNameListItems: SideNavListItem[] = [
    {name: 'Tenys', logoSrc: 'https://pbs.twimg.com/profile_images/1144693622/Logonegrotwitt_400x400.jpg' },
    {name: 'Stratovarius', logoSrc: 'https://cdn6.aptoide.com/imgs/8/e/5/8e53869d7a98613b9359845529eb509c_icon.png?w=256' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
