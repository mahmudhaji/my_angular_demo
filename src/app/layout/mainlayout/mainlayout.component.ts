import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.css']
})
export class MainlayoutComponent {

  showAccountMenu = false;

  // Functions to show different participant lists
  acctiveParticipants() {
    return this.rout.navigateByUrl("active")
  }

  participant() {
      return this.rout.navigateByUrl("participant()")
  }



  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    // showAccountMenu = false;

    constructor(private rout:Router){}

    toggleAccountMenu() {
      this.showAccountMenu = !this.showAccountMenu;
    }
  
    openSettings() {
      // Implement the logic to open the settings page or perform any action
    }
  
    logout() {
      // Implement the logout logic here
      return this.rout.navigateByUrl("")
      
    }
      

}
