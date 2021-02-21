import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
@Input() story
  constructor(private router:Router) { }
  
  gotoStory(){
  
    console.log(">>>> " , this.story);
    this.router.navigate(['/storydetail',this.story.id])

  }

  ngOnInit() {
    if(this.story && this.story.author && this.story.author.profilepic=="noimage"){
      this.story.author.profilepic = "https://images.all-free-download.com/images/graphicthumb/user_37223.jpg"
  }

  }
}