import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todoItem: string = '';
  public items: any = [];
  public days: any;
  public hours: any;
  public minutes: any;
  public seconds: any;
  public timerMessage: any;
  public showTimerCount =false;
  constructor() { }

  ngOnInit(): void {
    // this.showTimer()
  }

  submitNewItem() {
    const item = {
      "todo": this.todoItem,
      status: false
    }
    this.items.push(item)
  }

  deleteItem(index) {
    this.items.splice(index,1);
  }

  completeItem(index) {
    const item = this.items[index]
    item["status"] = true;
    this.items[index] = item;
    console.log(this.items)
  }

  pendingItem(index) {
    const item = this.items[index]
    item["status"] = false;
    this.items[index] = item;
    console.log(this.items)
  }

  showTimer() {
    this.showTimerCount = !this.showTimerCount;
    const countDownDate = new Date("July 10, 2020 00:00:00").getTime();
  // Update the count down every 1 second
    setInterval(( )=> {
      
    // Get today's date and time
    const now = new Date().getTime();
      
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);    

    this.timerMessage = {
      days,
      hours,
      minutes,
      seconds
    }
    // // If the count down is over, write some text 
    // if (distance < 0) {
    //   clearInterval(x);
    //   document.getElementById("demo").innerHTML = "EXPIRED";
    // }
  }, 1000);
  }

 }
