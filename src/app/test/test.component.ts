import { NgSwitch } from '@angular/common';
import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { find, map, retry, switchAll, switchMap, tap } from 'rxjs';
import { PipeTestPipe } from '../pipe-test.pipe';
import { Router } from '@angular/router';
import { NameService } from '../name.service';

@Component({
  providers:[PipeTestPipe],
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  // inputs:['pData']
  // encapsulation:ViewEncapsulation.ShadowDom
  // outputs:['childevent']
})
export class TestComponent {
  // @Output() childevent: any = new EventEmitter();
  isClicked:boolean = true

  data: any = [
    {
      id: 1,
      cName: "India",
      people: [
        {
          name: "hari"
        },
        {
          name: "kuldeep"
        },
        {
          name: "sunil chettri"
        }
      ]
    },
    {
      id: 2,
      cName: "UK",
      people: [
        {
          name: "hari-uk"
        },
        {
          name: "kuldeep-uk"
        },
        {
          name: "sunil chettri-uk"
        }
      ]
    },
    {
      id: 1,
      cName: "Autralia",
      people: [
        {
          name: "hari-aus"
        },
        {
          name: "kuldeep-aus"
        },
        {
          name: "sunil chettri-aus"
        }
      ]
    },
    {
      id: 1,
      cName: "china",
      people: [
        {
          name: "hari-chn"
        },
        {
          name: "kuldeep-chn"
        },
        {
          name: "sunil chettri-chn"
        }
      ]
    }
  ]
 
  // res: any = [{}]
  // imgUrl: string = ""
  // angular_logo: string = ""
  // styleBtn: any 
  // styleImg: any 
  // test = new Date()
  // number:number = 0.123256633
//   number:number = 92
//   ansArr :any
// fetchCHeck : any
// url: any
// data1 : any
// respData: any
test: any 
name: any

  constructor(private router: Router,private nameServiceApi: NameService) {    
 
    this.nameServiceApi.fetchUser().then((data) => this.name = data)
    // console.log(this.name.from(this.name))
    // this.fetchUser()
 
    // console.log(this.fetchUsers())
  //  console.log(this.fetchUsers())
    // this.test = "please write there in text box"
    // console.log(this.data)
    // try {
    //   this.url = fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((res) => console.log(res.json()))
    //   .catch((err) => console.log(err))
    // } catch (error) {
    //   console.log(error)
    // }
    // this.name()
    // this.imgUrl = "https://tse2.mm.bing.net/th?id=OIP.81pofYf27yzC8rtNfUHVdAHaCA&pid=Api&P=0&h=220"
    // // this.angular_logo = "angular-logo-admin"
    // this.styleBtn = {
    //   "background-color" : "black",
    //   "padding" : "10px",
    //   "color" : "whitesmoke"
    // }
    // this.styleImg = {
    //   "transition":"all 2s ease",
    //   "translate" : "0px"
    // }
  }
  handleChange(){
    this.isClicked = !this.isClicked
  }
}
  // checkData = () =>{
  //   this.fetchUser().then(this.getUser)
  // }
//  fetch data with promise by kali done 
  // getUser= (result: any)=>{
  //   console.log(result)
  // }
 
  // fetchUser(){
  //   let abcd = new Promise(async (resolve,reject)=>{
  //     let data = await fetch('https://mern-i.onrender.com/users/')
  //     if(data != null){
  //       resolve(data.json())
  //     }else{
  //       reject()
  //     }
  //   })
  //   abcd.then(this.getUser)
  // }
//  compeleted

  // handleClick(){
  //   this.styleImg.translate = "400px" 
  // }
  // handleHideClick(){
  //   this.styleImg.translate = "0px" 
  // }
  // url: any

  // async name() {
  //   this.res = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
  // await console.log(this.res)
  // }

  


  // getStyle(country: string){
  //   switch (country) {
  //     case "India":
  //       return "red";
  //     case "UK":
  //       return "violet";
  //     case "Autralia":
  //       return "blue";

  //     default:
  //       return "green"
  //       break;
  //   }
  // }

  // addRecord(){
  //   this.data= [
  //     {
  //       id:1,
  //       name:"hari",
  //       email:"hari",
  //       password:"hari"
  //     },
  //     {
  //       id:2,
  //       name:"hari",
  //       email:"hari",
  //       password:"hari"
  //     },
  //   {
  //     id:3,
  //     name:"hari",
  //     email:"hari",
  //     password:"hari"
  //   },
  //   {
  //     id:4,
  //     name:"hari",
  //     email:"hari",
  //     password:"hari"
  //   },
  //   {
  //     id:5,
  //     name:"add-hari",
  //     email:"hari",
  //     password:"hari"
  //   }
  // ]

  // }
  // trackById(index: number, data: any): string{
  //   return data.index
  // }
  // name: string = "name"
  // email: string = "email"
  // password: string = "password"



  // user: User = {}

  // arr: Array<string> = []
  // pData: string = ""
  // pData: string = ""
  // console.log(childevent: any);

  // todos: any ={
  //   id:"",
  //   name:"",
  //   todo:""
  // }
  // iname: any
  // itodo: any
  // x:any = 0
  // y: any
  // id: number = 0
  // todosArray: any = []
  // uBtn: any = " ADD TODO"




  // handleChange(name: any){
  //   // console.log(name.value,name.name)
  //   this.todos[name.name] = name.value
  //   if(name.name == "name"){
  //     this.iname = name
  //   }else{
  //     this.itodo = name
  //   }
  // }
  // handleSubmit(e:any){
  //   console.log(e)
  //   if(e.innerHTML== "update"){
  //     this.x.name = this.iname.value
  //     this.x.todo = this.itodo.value
  //   }else{
  //     this.todos['id'] = this.id++
  //     this.uBtn = e.innerText
  //     this.todosArray.push({...this.todos})
  //    }
  // }
  
  // handleDelete(val: any){
  //   // todos application code start
  //   this.todosArray.splice(val,1)
  //   console.log(this.todosArray)
  //   // todos application code over
  // }


  // handleUpdate(val:any, index: any){
  //   // console.log(val)
  //   // console.log(this.iname,this.itodo)
  //   // name.value = this.iname
  //   // console.log(this.uBtn)
  //   // console.log(this.uBtn)
    
  //   // this.uBtn.value = "update"
    
  //   // console.log(val)
  //   // todo's application code start
  //   this.iname.value = val.name  
  //   this.itodo.value = val.todo  
  //   this.uBtn= "update"
  //   this.x = this.todosArray.find((e: any) => {
  //   if(val.id == e.id)
  //     return val.id
  //   })
  //   console.log(this.x.id)
  //   // todo's application code over
  // }

    // console.log(this.uBtn)
    // console.log(this.iname,this.itodo)
    // console.log(this.)

  // let ids: Array<number>;
  // ids = [23, 34, 100, 124, 44]; 

  // fruits: (string | number)[] = ['Apple', 'Orange', 'Banana',2]; 
  // User: Array<object> = []
  // handleChangle(val: string, field: string){
  // console.log("CLICKED")
  // this.isClicked=!this.isClicked
  // console.log("ell")
  // console.log(val +"=>"+ name)
  // user: User
  //  this.User = [{
  //   name:"hari",
  //   email: "hari@gmail.ocm",
  //   password: "haikri"
  //  }]
  // if(this.User != null){
  //   this.User = [{[name]:val},...this.User]
  // }
  // this.data[field] = val
  // }

