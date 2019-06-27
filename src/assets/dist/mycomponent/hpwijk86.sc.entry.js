const e=window.mycomponent.h;class t{constructor(){this.arcThickness=30,this.colors=["red","yellow","green"],this.labelDistance=20,this.maxValue=100,this.measurementUnit="",this.minValue=-100,this.showLabels=!0,this.showValue=!0,this.size=300,this.value=0,this.arcGenerator=d3.arc(),this.maxValuePositive=0}percToDeg(e){return 360*e}degToRad(e){return e*Math.PI/180}percToRad(e){return this.degToRad(this.percToDeg(e))}calculateValuePercentage(e=0){return(e-this.minValue)/this.maxValuePositive}paintNeedle(e,t,s,a,i=0){let r,l,h,n,c,u;return n=this.percToRad(i/2),c=s-e*Math.cos(n),u=a-e*Math.sin(n),"M "+(r=s-t*Math.cos(n-Math.PI/2))+" "+(l=a-t*Math.sin(n-Math.PI/2))+" L "+c+" "+u+" L "+(h=s-t*Math.cos(n+Math.PI/2))+" "+(a-t*Math.sin(n+Math.PI/2))}render(){this.maxValuePositive=Math.abs(this.minValue-this.maxValue);const t=this.size/2,s=this.size/16,a=t-this.arcThickness/2,i=t+s+1*this.labelDistance,r=[];this.firstThreshold&&r.push(this.firstThreshold),this.secondThreshold&&r.push(this.secondThreshold);const l=[this.minValue,...r,this.maxValue],h=[];for(let s=0;s<l.length-1;s++){const a=this.arcGenerator({innerRadius:t-this.arcThickness,outerRadius:t,startAngle:this.calculateValuePercentage(l[s])*Math.PI,endAngle:this.calculateValuePercentage(l[s+1])*Math.PI});h.push(e("path",{d:a,style:{fill:this.colors[s]?this.colors[s]:"#000000"}}))}const n=this.showLabels?l.map(s=>{const i=this.calculateValuePercentage(s);let r="end";i>.5?r="start":.5===i&&(r="middle");const l=this.percToRad(i/2),h=t-(a+this.labelDistance)*Math.cos(l),n=t-(a+this.labelDistance)*Math.sin(l);return e("text",{class:"gauge__label-text","text-anchor":r,x:h,y:n},s+" "+this.measurementUnit)}):[];return e("div",{class:"gauge__container"},e("svg",{class:"gauge",viewBox:`0 0 ${this.size} ${i}`},e("g",{transform:`rotate(-90) translate(-${t}, ${t})`},h),e("circle",{class:"gauge__needle-base",cx:t,cy:t,r:s}),e("path",{class:"gauge__needle",d:this.paintNeedle(a,s,t,t,this.calculateValuePercentage(this.value))}),n,this.showValue?e("text",{class:"gauge__value-text","text-anchor":"middle",x:t,y:i},this.value+" "+this.measurementUnit):null))}static get is(){return"kup-gauge"}static get encapsulation(){return"shadow"}static get properties(){return{arcThickness:{type:Number,attr:"arc-thickness"},colors:{type:"Any",attr:"colors"},firstThreshold:{type:Number,attr:"first-threshold"},labelDistance:{type:Number,attr:"label-distance"},maxValue:{type:Number,attr:"max-value"},measurementUnit:{type:String,attr:"measurement-unit"},minValue:{type:Number,attr:"min-value"},secondThreshold:{type:Number,attr:"second-threshold"},showLabels:{type:Boolean,attr:"show-labels"},showValue:{type:Boolean,attr:"show-value"},size:{type:Number,attr:"size"},value:{type:Number,attr:"value"}}}static get style(){return".sc-kup-gauge-h{--gau_needle-color:var(--kup-gauge_needle-color,#000);--gau_top-lateral-padding:var(--kup-gauge_top-lateral-padding,30px);--gau_threshold-color:var(--kup-gauge_threshold-color,#000);--gau_value-color:var(--kup-gauge_value-color,#000);display:inline-block}.sc-kup-gauge-h   .gauge.sc-kup-gauge{height:auto;overflow:visible;width:100%}.sc-kup-gauge-h   .gauge__container.sc-kup-gauge{padding:var(--gau_top-lateral-padding) var(--gau_top-lateral-padding) 0}.sc-kup-gauge-h   .gauge__label-text.sc-kup-gauge{fill:var(--gau_threshold-color);text-align:center}.sc-kup-gauge-h   .gauge__value-text.sc-kup-gauge{fill:var(--gau_value-color);text-align:center}.sc-kup-gauge-h   .gauge__needle.sc-kup-gauge, .sc-kup-gauge-h   .gauge__needle-base.sc-kup-gauge{fill:var(--gau_needle-color)}"}}export{t as KupGauge};