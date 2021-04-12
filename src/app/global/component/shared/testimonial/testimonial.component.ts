import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testimonials = [
    {
      title: "It surpassed our expectations",
      content: "Filed has completely surpassed our expectations. I will refer everyone I know. Filed is worth much more than I paid.",
      name: "Tania Y.",
      designation:"Flexi Content @Hello",
      img_url: "taniya-y.png"
    },
    {
      title: "The essential marketing tool",
      content: "Filed is the most valuable business resource we have EVER purchased. I was amazed at the quality of filed. We were treated like royalty.",
      name:"Jack Francis",
      designation:"Manager @ Accidents Direct",
      img_url: "jack-francis.png"
    },
    {
      title: "Your company is truly upstanding",
      content: "The service was excellent. After using filed my business skyrocketed! It really saves me time and effort.",
      name:"Dawna N.",
      designation:"Editor @ Museum of Typography",
      img_url: "dawna.png"
    }
  ]

}
