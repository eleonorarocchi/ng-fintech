import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { UserStore } from 'src/app/core/user.store';

@Component({
  selector: 'er-dashboard',
  template: `
    <h1>
      Ciao {{displayName}}!
    </h1>
    <div class="graph">
    <div id="bar-chart">
      <h2>Investimenti</h2>
      <div class="graph">
        <ul class="x-axis">
          <li><span>2017</span></li>
          <li><span>2018</span></li>
          <li><span>2019</span></li>
          <li><span>2020</span></li>
          <li><span>2021</span></li>
        </ul>
        <ul class="y-axis">
          <li><span>20</span></li>
          <li><span>15</span></li>
          <li><span>10</span></li>
          <li><span>5</span></li>
          <li><span>0</span></li>
        </ul>
        <div class="bars">
          <div class="bar-group">
            <div class="bar bar-1 stat-1" style="height: 51%;">      
              <span>4080</span>
            </div>
            <div class="bar bar-2 stat-2" style="height: 71%;">
              <span>5680</span>
            </div>
            <div class="bar bar-3 stat-3" style="height: 13%;">
              <span>1040</span>
            </div>
          </div>
          <div class="bar-group">
            <div class="bar bar-4 stat-1" style="height: 76%;">
              <span>6080</span>
            </div>
            <div class="bar bar-5 stat-2" style="height: 86%;">
              <span>6880</span>
            </div>
            <div class="bar bar-6 stat-3" style="height: 22%;">
              <span>1760</span>
            </div>
          </div>
          <div class="bar-group">
            <div class="bar bar-7 stat-1" style="height: 78%;">
              <span>6240</span>
            </div>
            <div class="bar bar-8 stat-2" style="height: 72%;">
              <span>5760</span>
            </div>
            <div class="bar bar-9 stat-3" style="height: 36%;">
              <span>2880</span>
            </div></div>
          <div class="bar-group">
            <div class="bar bar-10 stat-1" style="height: 44%;">
              <span>3520</span>
            </div>
            <div class="bar bar-11 stat-2" style="height: 64%;">
              <span>5120</span>
            </div>
            <div class="bar bar-12 stat-3" style="height: 59%">
              <span>4720</span>
            </div>
          </div>
          <div class="bar-group">
            <div class="bar bar-13 stat-1" style="height: 28%;">
              <span>2240</span>
            </div>
            <div class="bar bar-14 stat-2" style="height: 33%;">
              <span>2640</span>
            </div>
            <div class="bar bar-15 stat-3" style="height: 94%;">
              <span>7520</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  `,
  styles: [`
    h1 {
      font-variant: small-caps
    }
    h2 {
      background: #e898e7;
      color: white;
      text-align: center;
    }
    @-webkit-keyframes animate-width {
  0% {
    width: 0;
  }
  100% {
    visibility: visible;
  }
}
@-moz-keyframes animate-width {
  0% {
    width: 0;
  }
  100% {
    visibility: visible;
  }
}
@keyframes animate-width {
  0% {
    width: 0;
  }
  100% {
    visibility: visible;
  }
}
@-webkit-keyframes animate-height {
  0% {
    height: 0;
  }
  100% {
    visibility: visible;
  }
}
@-moz-keyframes animate-height {
  0% {
    height: 0;
  }
  100% {
    visibility: visible;
  }
}
@keyframes animate-height {
  0% {
    height: 0;
  }
  100% {
    visibility: visible;
  }
}
body {
  background-color: #3b4150;
  font-family: arial, sans-serif;
  color: #cdcdcd;
}

#bar-chart {
  height: 380px;
  width: 70%;
  position: relative;
  margin: 50px auto 0;
}
#bar-chart * {
  box-sizing: border-box;
}
#bar-chart .graph {
  height: 283px;
  position: relative;
}
#bar-chart .bars {
  height: 253px;
  padding: 0 2%;
  position: absolute;
  width: 100%;
  z-index: 10;
}
#bar-chart .bar-group {
  display: block;
  float: left;
  height: 100%;
  position: relative;
  width: 12%;
  margin-right: 10%;
}
#bar-chart .bar-group:last-child {
  margin-right: 0;
}
#bar-chart .bar-group .bar {
  visibility: hidden;
  height: 0;
  -webkit-animation: animate-height;
  -moz-animation: animate-height;
  animation: animate-height;
  animation-timing-function: cubic-bezier(0.35, 0.95, 0.67, 0.99);
  -webkit-animation-timing-function: cubic-bezier(0.35, 0.95, 0.67, 0.99);
  -moz-animation-timing-function: cubic-bezier(0.35, 0.95, 0.67, 0.99);
  animation-duration: 0.4s;
  -webkit-animation-duration: 0.4s;
  -moz-animation-duration: 0.4s;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  box-shadow: 1px 0 2px rgba(0, 0, 0, 0.15);
  border: 1px solid #2d2d2d;
  border-radius: 3px 3px 0 0;
  bottom: 0;
  cursor: pointer;
  height: 0;
  position: absolute;
  text-align: center;
  width: 25%;
}
#bar-chart .bar-group .bar:nth-child(2) {
  left: 35%;
}
#bar-chart .bar-group .bar:nth-child(3) {
  left: 70%;
}
#bar-chart .bar-group .bar span {
  display: none;
}
#bar-chart .bar-group .bar-1 {
  animation-delay: 0.3s;
  -webkit-animation-delay: 0.3s;
}
#bar-chart .bar-group .bar-2 {
  animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
}
#bar-chart .bar-group .bar-3 {
  animation-delay: 0.5s;
  -webkit-animation-delay: 0.5s;
}
#bar-chart .bar-group .bar-4 {
  animation-delay: 0.6s;
  -webkit-animation-delay: 0.6s;
}
#bar-chart .bar-group .bar-5 {
  animation-delay: 0.7s;
  -webkit-animation-delay: 0.7s;
}
#bar-chart .bar-group .bar-6 {
  animation-delay: 0.8s;
  -webkit-animation-delay: 0.8s;
}
#bar-chart .bar-group .bar-7 {
  animation-delay: 0.9s;
  -webkit-animation-delay: 0.9s;
}
#bar-chart .bar-group .bar-8 {
  animation-delay: 1s;
  -webkit-animation-delay: 1s;
}
#bar-chart .bar-group .bar-9 {
  animation-delay: 1.1s;
  -webkit-animation-delay: 1.1s;
}
#bar-chart .bar-group .bar-10 {
  animation-delay: 1.2s;
  -webkit-animation-delay: 1.2s;
}
#bar-chart .bar-group .bar-11 {
  animation-delay: 1.3s;
  -webkit-animation-delay: 1.3s;
}
#bar-chart .bar-group .bar-12 {
  animation-delay: 1.4s;
  -webkit-animation-delay: 1.4s;
}
#bar-chart .bar-group .bar-13 {
  animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
}
#bar-chart .bar-group .bar-14 {
  animation-delay: 1.6s;
  -webkit-animation-delay: 1.6s;
}
#bar-chart .bar-group .bar-15 {
  animation-delay: 1.7s;
  -webkit-animation-delay: 1.7s;
}
#bar-chart ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
#bar-chart .x-axis {
  bottom: 0;
  position: absolute;
  text-align: center;
  width: 100%;
}
#bar-chart .x-axis li {
  float: left;
  margin-right: 10.5%;
  font-size: 11px;
  width: 11.5%;
}
#bar-chart .x-axis li:last-child {
  margin-right: 0;
}
#bar-chart .y-axis {
  position: absolute;
  text-align: right;
  width: 100%;
}
#bar-chart .y-axis li {
  border-top: 1px solid #4e5464;
  display: block;
  height: 63.25px;
  width: 100%;
}
#bar-chart .y-axis li span {
  display: block;
  font-size: 11px;
  margin: -10px 0 0 -60px;
  padding: 0 10px;
  width: 40px;
}
#bar-chart .stat-1 {
  background-image: -webkit-linear-gradient(left, #ff4500 0%, #ff4500 47%, #cf3a02 50%, #cf3a02 100%);
  background-image: linear-gradient(to right, #ff4500 0%, #ff4500 47%, #cf3a02 50%, #cf3a02 100%);
}
#bar-chart .stat-2 {
  background-image: -webkit-linear-gradient(left, #b8f123 0%, #b8f123 47%, #79a602 50%, #79a602 100%);
  background-image: linear-gradient(to right, #b8f123 0%, #b8f123 47%, #79a602 50%, #79a602 100%);
}
#bar-chart .stat-3 {
  background-image: -webkit-linear-gradient(left, #00c5ff 0%, #00c5ff 47%, #0383a9 50%, #0383a9 100%);
  background-image: linear-gradient(to right, #00c5ff 0%, #00c5ff 47%, #0383a9 50%, #0383a9 100%);
}

    ` ]
})
export class DashboardComponent implements OnInit {
  displayName : string = "";
  constructor(private _user: UserStore) {
    _user.$user.pipe(take(1)).subscribe(value => { 
      this.displayName = value ? value?.displayName : ""
    })
   }

  ngOnInit(): void {
  }

}
  