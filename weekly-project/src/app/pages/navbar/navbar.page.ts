import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Music } from '../Music';
import { NavServiceService } from './nav-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss']
})
export class NavbarPage implements OnInit, AfterContentInit, AfterViewInit {

  mainActive:boolean=true
  name:any
  n:any
  profile:boolean= true
  enter:boolean= false
  artist:string=''
  error:undefined;
  music:any
  musicArtist:any
  musFound:any
  artistCard:any
  artistFavCard:Music[]=[]



  @ViewChild('field',{read:ElementRef}) field?: ElementRef;
  @ViewChild('title',{read:ElementRef}) title?: ElementRef;
  @ViewChild('artistName',{read:ElementRef}) artistName?: ElementRef;
  @ViewChild('song',{read:ElementRef}) song?: ElementRef;

  constructor(private navService: NavServiceService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('userLogin')
    this.n = JSON.parse(this.name)
  }

  ngAfterContentInit () {
    this.musicArtist= localStorage.getItem('artistMusic')
    this.music= JSON.parse(this.musicArtist)
    this.musFound=this.music.data
    console.log(this.musFound);
  }

  ngAfterViewInit(): void {
      this.artistCard = new Music(this.field?.nativeElement.src,this.artistName?.nativeElement.textContent,
        this.song?.nativeElement.src,this.title?.nativeElement.textContent)
      }


      addList(){
        this.artistFavCard=this.artistCard
      }


  findArtist(){
    localStorage.removeItem('artistMusic')
  this.navService.getArtist(this.artist).subscribe(
      data=>{
        console.log(data);
        this.error = undefined;
        localStorage.setItem('artistMusic', JSON.stringify(data))
      },
      err => {
        console.log(err);
        this.error = err.error
        alert(this.error)
  });
  }

}
