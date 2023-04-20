import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
works:any[]=[]
lang:String="ar"
constructor(public translate: TranslateService, public language:LanguageService){
  this.works=[
    {id :1 , name :"Gate Barrier" ,
    images:['../../../assets/images/doors/DSC_8463.webp',
             '../../../assets/images/doors/DSC_8466.webp',
             '../../../assets/images/doors/DSC_8469.webp',
             '../../../assets/images/m/DSC_9012.webp',
             '../../../assets/images/m/DSC_9005.webp',
             '../../../assets/images/doors/DSC_8480.webp',
             '../../../assets/images/doors/DSC_8647.webp',
             '../../../assets/images/doors/DSC_8654.webp',
             '../../../assets/images/doors/DSC_8664.webp',]
    
    },
    {id :2 , name :"Surveillance Cameras" ,
    images:['../../../assets/images/camera/DSC_8766.webp',
          '../../../assets/images/camera/DSC_8980.webp',
          '../../../assets/images/camera/DSC_8984.webp',
          '../../../assets/images/camera/DSC_8987.webp',
          '../../../assets/images/camera/DSC_8989.webp',
        ]
      },
      {id :3 ,name :"Network Solutions",
    images:['../../../assets/images/network/DSC_8336.webp',
            '../../../assets/images/network/DSC_8548.webp',
            '../../../assets/images/network/DSC_8744.webp',
            '../../../assets/images/network/DSC_8746.webp',
            '../../../assets/images/network/DSC_8562.webp',
            '../../../assets/images/network/DSC_8676.webp',
            '../../../assets/images/network/DSC_8721.webp',
            '../../../assets/images/network/DSC_8744.webp',],
          },
          {id :4 ,name :"link" ,
    images:['../../../assets/images/nown/DSC_8397.webp',
             '../../../assets/images/nown/DSC_8402.webp',
            '../../../assets/images/nown/DSC_8445.webp',
            '../../../assets/images/nown/DSC_8452.webp',
            '../../../assets/images/nown/DSC_8456.webp',]}
  ]
}
  ngOnInit(): void {
    this.language.languge.subscribe(()=>{
      console.log( this.language.languge.value)
      this.lang=this.language.languge.value
     })
  }

}
