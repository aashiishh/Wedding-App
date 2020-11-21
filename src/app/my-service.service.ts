import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap,take, switchMap, map} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { EventDetail } from './models/event-details';

interface EventSchedule{

  time: string,
  event:string,
  venue:string,
}
interface NamesData {
  name: string,
}

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private _gmName = new BehaviorSubject<string>('');
  private _homePicUrl = new BehaviorSubject<string>('');
  private _fmNames = new BehaviorSubject<string[]>([]);
  private _bNames = new BehaviorSubject<string[]>([]);
  private _auNames = new BehaviorSubject<string[]>([]);
  private _images = new BehaviorSubject<string[]>([]);
  private _yURL = new BehaviorSubject<string>('');

  private _day1table = new BehaviorSubject<EventDetail[]>([]);

  constructor(private http:HttpClient) { }

  get day1table()
  {
    return this._day1table.asObservable();
  }
  get fmNames()
  {
    return this._fmNames.asObservable();
  }
get homePicUrl()
{
  return this._homePicUrl.asObservable();
}
  get gmName()
  {
    return this._gmName.asObservable();
  }
  get bNames()
  {
    return this._bNames.asObservable();
  }
  get auNames()
  {
    return this._auNames.asObservable();
  }
  get images()
  {
    return this._images.asObservable();
  }
  get yURL()
  {
    return this._yURL.asObservable();
  }

  fetchFatherMotherNames(check : string)
  {
    let url = '';
    if(check === "his")
    url = 'https://wedding-app-db970.firebaseio.com/guests/his/fm.json';
    else
    url = 'https://wedding-app-db970.firebaseio.com/guests/her/fm.json';
    return this.http.get<{[key : string]: NamesData}>(url).pipe(
       map( fmNamesData => {
        const names = [];
        for(const key in fmNamesData)
        {
          if(fmNamesData.hasOwnProperty(key))
          {
            names.push(fmNamesData[key])
          }
        }
        return names;
      }), tap(list => {
        this._fmNames.next(list);
      })
      )
  }
  fetchBroandSisNames(check : string)
  {
    let url = '';
    if(check === "his")
    url = 'https://wedding-app-db970.firebaseio.com/guests/his/brothers.json';
    else
    url = 'https://wedding-app-db970.firebaseio.com/guests/her/bns.json';
    return this.http.get<{[key : string]: NamesData}>(url).pipe(
       map( bNamesData => {
        const names = [];
        for(const key in bNamesData)
        {
          if(bNamesData.hasOwnProperty(key))
          {
            names.push(bNamesData[key])
            //names.push(bNamesData[key].time,bNamesData[key].event,.....)
          }
        }
        return names;
      }), tap(list => {
        this._bNames.next(list);
      })
      )
  }
  fetchUncleandAuntNames(check : string)
  {
    let url = '';
    if(check === "his")
    url = 'https://wedding-app-db970.firebaseio.com/guests/his/au.json';
    else
    url = 'https://wedding-app-db970.firebaseio.com/guests/her/au.json';
    return this.http.get<{[key : string]: NamesData}>(url).pipe(
       map( auNamesData => {
        const names = [];
        for(const key in auNamesData)
        {
          if(auNamesData.hasOwnProperty(key))
          {
            names.push(auNamesData[key])
          }
        }
        return names;
      }), tap(list => {
        this._auNames.next(list);
      })
      )
  }

  fetchMemories()
  {
    return this.http.get<{[key : string]: NamesData}>('https://wedding-app-db970.firebaseio.com/memories.json').pipe(
       map( memories => {
        const imagesArray = [];
        for(const key in memories)
        {
          if(memories.hasOwnProperty(key))
          {
            imagesArray.push(memories[key])
          }
        }
        return imagesArray;
      }), tap(list => {
        this._images.next(list);
      })
      )
  }
  fetchGrandmotherName()
  {
    return this.http.get<{[key : string]: string}>('https://wedding-app-db970.firebaseio.com/guests/her/baa.json').pipe(
       map( myName => {
        let name = '';
        for(const key in myName)
        {
          if(myName.hasOwnProperty(key))
          {
            name = myName[key]
          }
        }
        return name;
      }), tap(name => {
        this._gmName.next(name);
      })
      )
  }
  fetchYoutubeLink()
  {
    return this.http.get<{[key : string]: string}>('https://wedding-app-db970.firebaseio.com/youtubelink.json').pipe(
       map( myURL => {
        let url = '';
        for(const key in myURL)
        {
          if(myURL.hasOwnProperty(key))
          {
            url = myURL[key]
          }
        }
        return url;
      }), tap(u => {
        this._yURL.next(u);
      })
      )
  }
  fetchHomePicUrlLink()
  {
    return this.http.get<{[key : string]: string}>('https://wedding-app-db970.firebaseio.com/HomeImage.json').pipe(
       map( myURL => {
        let url = '';
        for(const key in myURL)
        {
          if(myURL.hasOwnProperty(key))
          {
            url = myURL[key]
          }
        }
        return url;
      }), tap(u => {
        this._homePicUrl.next(u);
      })
      )
  }
fetchDayFirst(check : string)
{
let url = '';
if(check === "Day1")
url = 'https://wedding-app-db970.firebaseio.com/Schedule/Day1.json';
else
url = 'https://wedding-app-db970.firebaseio.com/Schedule/Day2.json';
return this.http.get<{[key : string]: EventSchedule}>(url).pipe(
map( day1Data => {
const names = [];
for(const key in day1Data)
{
  if(day1Data.hasOwnProperty(key))
  {
    names.push(new EventDetail(day1Data[key].time,day1Data[key].event,day1Data[key].venue))
  }
}
return names;
}), tap(list => {
this._day1table.next(list);
})
)
}

}
