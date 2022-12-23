import {Component} from '@angular/core';
import {Channel} from "./classes/channel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedTime = 9;
  packets = [3, 9];
  isStarted = false;
  isFinished = false;
  time = 0;
  finalTime = 36_000_000;
  // finalTime = 100;
  channel1: Channel = new Channel();
  channel2: Channel = new Channel();

  async onStartClick(): Promise<void> {
    this.isStarted = true;
    this.channel1 = new Channel();
    this.channel1.selectedTime = this.selectedTime;
    this.channel2 = new Channel();
    this.channel2.selectedTime = this.selectedTime;
    while (this.time < this.finalTime) {
      if (this.channel1.totalTime < this.channel2.totalTime) {
        this.channel1.newTime();
      } else {
        this.channel2.newTime();
      }
      this.time = this.channel1.totalTime + this.channel2.totalTime;
      await new Promise(r => setTimeout(r, 100));
    }
    this.isFinished = true;
    console.log('Task finished!')
  }


}
