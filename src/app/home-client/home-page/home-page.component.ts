import {Component, OnInit} from '@angular/core';
import {HouseService} from "@app/_services/house.service";
import {House} from "@app/_model/house";

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private houseService: HouseService
  ) {
  }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        smartSpeed: 1200,
        autoplay: true
      })
      var recentSlider = $('.recent_slider');
      recentSlider.owlCarousel(
        {
          items: 3,
          autoplay: false,
          loop: true,
          smartSpeed: 1200,
          nav: false,
          dots: false,
          responsive:
            {
              0:
                {
                  items: 1
                },
              991:
                {
                  items: 2
                },
              1199:
                {
                  items: 3
                }
            }
        });

      var prev = $('.recent_slider_prev');
      prev.on('click', function () {
        recentSlider.trigger('prev.owl.carousel');
      });

      var next = $('.recent_slider_next');
      next.on('click', function () {
        recentSlider.trigger('next.owl.carousel');
      });

    })
    this.loadData()

  }

  houseList: House[] = [];

  loadData() {
    this.houseService.getAll().subscribe(data =>
      this.houseList = data
    );
  }


}
