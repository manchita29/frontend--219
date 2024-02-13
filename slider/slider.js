
const a = document.querySelectorAll('.slider');
// console.log(a);
var counter=0;
a.forEach(
    (slider,index)=>
    {
        slider.style.top=`${index *100}%`
    }
)
const previous=()=>
{
    counter--;
    sliderrun();
}
const next=()=>
{
    counter++;
    sliderrun();
}
const sliderrun=()=>
{ 
         a.forEach(

(slider)=>
{

    slider.style.transform=`translateY(-${counter *100}%)`
    }    )

} 

