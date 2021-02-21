import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoryService } from '../story.service';
@Component({
  selector: 'app-writestory',
  templateUrl: './writestory.component.html',
  styleUrls: ['./writestory.component.css']
})
export class WritestoryComponent implements OnInit {
  title
  genre
  description
  author
  storypic
  
  constructor(private router :Router ,private storyservice: StoryService) { }

  ngOnInit() {
   var user = localStorage.getItem("userdetails")
    this.author =  JSON.parse(user)
    console.log(typeof this.author, this.author) 
  }

  finish(){
    console.log("clicked on create button", this.title, this.genre,this.description, this.author, this.storypic)
    var postdata={
      title:this.title,
       genre:this.genre,
       description:this.description,
       author:this.author,
       storypic:this.storypic
    }
    this.storyservice.create(postdata)
    .subscribe((response)=>{
      console.log("response recieved from api", response);
      
         this.router.navigate(['/home'])
    
    },(err)=>{

    })
  }

}
