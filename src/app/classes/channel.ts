export class Channel {
  trashCount = 0;
  trashColor: string = 'hsl(0 0% 40%)';
  transferSpeed: 4 | 5 = 5;
  channelCount = 0;
  time = 0;
  totalTime = 0;
  selectedTime!: number;

  get trashWaste() {
    return this.trashCount / this.channelCount;
  }

  newTime(): void {
    this.time = this.float(this.randTillNum(this.transferSpeed) + this.selectedTime);
    this.channelCount++;
    if (this.time > 10) {
      this.trashCount++;
      this.transferSpeed = this.trashWaste < .3 ? 5 : 4;
    } else {
      this.totalTime += this.time;
    }
    this.trashColor = this.getTrashColor(this.trashWaste);
  }

  private getTrashColor(val: number): string {
    return `hsl(0 ${val * 100}% 40%)`;
  }

  private randTillNum(end: number) {
    return Math.random() * end;
  }

  private float(num: number, digits = 2): number {
    const precision = 10 ** digits
    return Math.round(num * precision) / precision;
  }
}
