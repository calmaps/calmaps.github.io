(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,r,a){e.exports=a(24)},,,,,function(e,r,a){},,function(e,r,a){},,function(e,r,a){},,function(e,r,a){},,function(e,r,a){},,function(e,r,a){"use strict";a.r(r);var t=a(0),n=a.n(t),o=a(7),s=a.n(o),c=(a(14),a(1)),i=a(2),l=a(4),u=a(3),g=a(5),d=(a(16),a(8)),m=(a(18),a(20),window.mapboxgl),p="localhost"===window.location.hostname,y=function(e,r){return[e,r]},f=function(e){return e.lng?[e.lng,e.lat]:e},k=function(e,r){return[f(e)[0]-f(r)[0],f(e)[1]-f(r)[1]]},L=function(e,r){return[f(e)[0]+f(r)[0],f(e)[1]+f(r)[1]]},h=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return r.reduce(function(e,r){return[r.lng+e[0],r.lat+e[1]]},[0,0]).map(function(e){return e/r.length})},v=.9,b={"1984-libraries":{year:"1984",url:"./fair-use-non-free-content/1984-libraries.jpg",corners:[[-122.27075908931513,37.877197923288705],[-122.24277127446622,37.880955076775194],[-122.23967429500188,37.866663373248414],[-122.26785940109859,37.863006247345936]]},"1979-baldwin":{year:"1979",url:"./fair-use-non-free-content/1979-baldwin.jpg",corners:[[-122.27242632492538,37.87075445739155],[-122.25552588983287,37.88255299743762],[-122.24401514609337,37.87263226468354],[-122.26089919151718,37.86083689391005]]},"1978-libraries":{year:"1978",url:"./fair-use-non-free-content/1978-libraries.jpg",corners:[[-122.2701000195511,37.87636827020319],[-122.243487023854,37.88003463476477],[-122.24031271567989,37.86637727613014],[-122.26732743196749,37.862897933977194]]},"1976-guide":{year:"1976",url:"./fair-use-non-free-content/1976-guide.jpg",corners:[[-122.27630691497926,37.875087759002525],[-122.25102700831442,37.87840395824955],[-122.24145272393383,37.83314956332889],[-122.26678778880266,37.829912831945094]]},"1969-campus":{year:"1969",url:"./fair-use-non-free-content/1969-campus.jpg",corners:[[-122.27014967661651,37.87676446014055],[-122.24665395469927,37.880049635761566],[-122.24406902036667,37.86816237839675],[-122.26763640309211,37.86499235790795]]},"1965-libraries":{year:"1965",url:"./fair-use-non-free-content/1965-libraries.jpg",corners:[[-122.26738253946081,37.875197184902774],[-122.23902012599287,37.878809448201665],[-122.23718404449107,37.870062386874054],[-122.26553122935505,37.86643908068625]]},"1962-long-range-development-plan":{year:"1962",url:"./fair-use-non-free-content/1962-long-range-development-plan.jpg",corners:[[-122.24518564788491,37.884268884147176],[-122.2415246334588,37.86601203450013],[-122.27118504469288,37.86216035693175],[-122.27482939734136,37.88036805298445]]},"1972-campus-brightened":{year:"1972",url:"./fair-use-non-free-content/1972-campus-brightened.jpg",corners:[[-122.27021754368293,37.87615669295823],[-122.24681735760754,37.879146454895974],[-122.24404090563817,37.866030492749104],[-122.2676143888205,37.86302420608884]]},"1933-campus":{year:"1933",url:"./fair-use-non-free-content/1933-campus.jpg",corners:[[-122.24321841791497,37.880785600466496],[-122.24056329771855,37.86814651693754],[-122.26894970030844,37.86457049634011],[-122.27136122383384,37.8771585560435]]},1910:{year:"1910",url:"./fair-use-non-free-content/1910-smaller.jpg",corners:[[-122.25368381624293,37.87666271788129],[-122.25205864680986,37.8690054551667],[-122.26567321115618,37.867273073426304],[-122.26725246910868,37.87479602627526]]}},w=function(e){return e},S=function(e){var r=Object(d.a)(e,2);return{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[r[0],r[1]]}}},C=[-122.259491,37.873931],O={container:"map",zoom:13,minZoom:11,maxZoom:18,style:{version:8,sources:{"raster-tiles":{type:"raster",tiles:["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],tileSize:128}},layers:[{id:"simple-tiles",type:"raster",source:"raster-tiles",minzoom:0,maxzoom:24}]},maxBounds:[y(-122.552,37.673),y(-122.0467,37.987)],customAttribution:"Satellite map source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community",center:C},M=function(e){function r(e){var a,t;return Object(c.a)(this,r),(a=Object(l.a)(this,Object(u.a)(r).call(this))).imageOverlayAdded=!1,a.sources={},a.state={},a.lastMarkerUpdate=0,a.lastCenterAverage=[0,0],a.currentOverlaySourceName=null,a.historyStack=[],a.addSource=function(e,r){a.sources[e]||(console.log("adding source"),a.sources[e]=a.map.addSource(e,{type:"image",url:w(b[e].url),coordinates:b[e].corners}))},a.setImageOverlay=function(e){a.imageOverlayAdded?(t.getLayer("imageOverlay").source=e,console.log(t.getLayer("imageOverlay").paint["raster-opacity"]=v),t.setPaintProperty("imageOverlay","raster-opacity",v)):(a.imageOverlayAdded=!0,a.currentOverlaySourceName=e,a.map.addLayer({id:"imageOverlay",source:e,type:"raster",paint:{"raster-opacity":v}}))},a.setImage=function(e){var r=b[e];if(!r)throw new Error("Scan doesnt exist:",e);a.currentSource=e,a.currentOverlaySourceName=e,a.addSource(e,r.corners),a.setImageOverlay(e),a.setNewMarkers(r.corners),a.updateCorners(!0)},a.setNewMarkers=function(e){p&&(a.markers[0].setLngLat(e[0]),a.markers[1].setLngLat(e[1]),a.markers[2].setLngLat(e[2]),a.markers[3].setLngLat(e[3]),a.lastCenterAverage=h(a.markers[0].getLngLat(),a.markers[1].getLngLat(),a.markers[2].getLngLat(),a.markers[3].getLngLat()),a.markers[4].setLngLat(a.lastCenterAverage))},a.updateCornersAutomated=function(){a.updateCorners(!1,!0)},a.updateCorners=function(e,r){if(null!=a.currentSource)if(!e&&Date.now()-a.lastMarkerUpdate<300)r||setTimeout(a.updateCornersAutomated,300-Date.now()-a.lastMarkerUpdate+2);else{a.lastMarkerUpdate=Date.now();var t=a.map.getSource(a.currentOverlaySourceName),n=b[a.currentOverlaySourceName];t.setCoordinates(n.corners),a.logScanConfig(),a.setNewMarkers(n.corners),a.historyStack.push(n.corners.slice(0)),a.calculateBorders()}},a.logScanConfig=function(){var e=b[a.currentOverlaySourceName];console.log("'".concat(a.currentOverlaySourceName,"': ").concat(JSON.stringify(e,null,0),","))},a.undo=function(){if(a.historyStack.length>0){a.historyStack.pop();var e=a.historyStack[a.historyStack.length-1],r=b[a.currentOverlaySourceName];r.corners=e,a.setNewMarkers(r.corners),a.calculateBorders(),a.map.getSource(a.currentOverlaySourceName).setCoordinates(r.corners),a.logScanConfig()}},a.handleMarkerChange=function(e,r,t){if(null!=a.currentSource){var n=a.map.getSource(a.currentOverlaySourceName),o=b[a.currentOverlaySourceName];if(n&&o){if(4===e){var s=k(r,a.lastCenterAverage);o.corners[0]=L(a.markers[0].getLngLat(),s),o.corners[1]=L(a.markers[1].getLngLat(),s),o.corners[2]=L(a.markers[2].getLngLat(),s),o.corners[3]=L(a.markers[3].getLngLat(),s)}else o.corners[0]=f(a.markers[0].getLngLat()),o.corners[1]=f(a.markers[1].getLngLat()),o.corners[2]=f(a.markers[2].getLngLat()),o.corners[3]=f(a.markers[3].getLngLat());a.updateCorners(t)}else console.log("Invariant breached Something was empty",n,o)}},a.calculateBorders=function(){if(p){var e=[a.markers[0].getLngLat().lng,a.markers[0].getLngLat().lat],r=[a.markers[1].getLngLat().lng,a.markers[1].getLngLat().lat],t=[a.markers[2].getLngLat().lng,a.markers[2].getLngLat().lat],n=[a.markers[3].getLngLat().lng,a.markers[3].getLngLat().lat];a.map.getSource("borderTB").setData({type:"FeatureCollection",features:[S([t,L(t,k(e,r))]),S([n,L(n,k(r,e))]),S([e,L(e,k(t,n))]),S([r,L(r,k(n,t))])]}),a.map.getSource("borderLR").setData({type:"FeatureCollection",features:[S([n,L(n,k(r,t))]),S([e,L(e,k(t,r))]),S([r,L(r,k(n,e))]),S([t,L(t,k(e,n))])]})}},a.setupMap=function(){t=a.map,p&&(a.markers=[new m.Marker({draggable:!0,color:"#003262"}),new m.Marker({draggable:!0,color:"#3B7EA1"}),new m.Marker({draggable:!0,color:"#FDB515"}),new m.Marker({draggable:!0,color:"#C4820E"}),new m.Marker({draggable:!0,color:"#FFFFFF"})],a.markers[0].on("drag",function(){return a.handleMarkerChange(0,a.markers[0].getLngLat())}),a.markers[1].on("drag",function(){return a.handleMarkerChange(1,a.markers[1].getLngLat())}),a.markers[2].on("drag",function(){return a.handleMarkerChange(2,a.markers[2].getLngLat())}),a.markers[3].on("drag",function(){return a.handleMarkerChange(3,a.markers[3].getLngLat())}),a.markers[4].on("drag",function(){return a.handleMarkerChange(4,a.markers[4].getLngLat())}),a.markers[0].on("dragend",function(){return a.handleMarkerChange(0,a.markers[0].getLngLat(),!0)}),a.markers[1].on("dragend",function(){return a.handleMarkerChange(1,a.markers[1].getLngLat(),!0)}),a.markers[2].on("dragend",function(){return a.handleMarkerChange(2,a.markers[2].getLngLat(),!0)}),a.markers[3].on("dragend",function(){return a.handleMarkerChange(3,a.markers[3].getLngLat(),!0)}),a.markers[4].on("dragend",function(){return a.handleMarkerChange(4,a.markers[4].getLngLat(),!0)}),a.markers[0].setLngLat(y(-122.27246573870457,37.87077721085865)).addTo(t),a.markers[1].setLngLat(y(-122.25556530361206,37.88257575090472)).addTo(t),a.markers[2].setLngLat(y(-122.2441424865603,37.87273856363721)).addTo(t),a.markers[3].setLngLat(y(-122.26074299964147,37.86081212396496)).addTo(t),a.markers[4].setLngLat(y(-122.26074299964147,37.86081212396496)).addTo(t),t.addSource("borderTB",{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[]}}}),t.addLayer({id:"borderTB",type:"line",source:"borderTB",paint:{"line-color":"#003262","line-opacity":.5,"line-width":4}}),t.addSource("borderLR",{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[]}}}),t.addLayer({id:"borderLR",type:"line",source:"borderLR",paint:{"line-color":"#FDB515","line-opacity":.5,"line-width":4}}),a.calculateBorders()),t.on("click",function(e){}),t.on("mousedown",function(){a.imageOverlayAdded&&t.setPaintProperty("imageOverlay","raster-opacity",.3)}),t.on("mouseup",function(){a.imageOverlayAdded&&t.setPaintProperty("imageOverlay","raster-opacity",v)}),setTimeout(function(){e.initialMap&&a.setImage(e.initialMap)},500),t.boxZoom.disable(),t.doubleClickZoom.disable(),t.addControl(new m.NavigationControl),t.addControl(new m.AttributionControl({compact:!0}),"top-left"),e.signup(function(e){a.setImage(e)}),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&"z"===e.key&&a.undo(),p&&"t"===e.key&&(v=.9===v?.5:.9,t.setPaintProperty("imageOverlay","raster-opacity",v))})},a}return Object(g.a)(r,e),Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=new m.Map(O);this.map=e,window.map=e,this.map.on("load",this.setupMap)}},{key:"render",value:function(){return n.a.createElement("div",{className:"Mapp"},n.a.createElement("div",{id:"map"}))}}]),r}(t.Component),j=(a(22),function(e){function r(e){var a;return Object(c.a)(this,r),(a=Object(l.a)(this,Object(u.a)(r).call(this))).scan=e.scan,a.scanId=e.scanId,a.props=e,a}return Object(g.a)(r,e),Object(i.a)(r,[{key:"render",value:function(){var e=this.scan;return n.a.createElement("div",{className:"SidebarItem ".concat(this.props.active?"is-active":"")},n.a.createElement("a",{href:"#".concat(this.scanId),className:"SidebarItem__label"},e.year))}}]),r}(t.Component)),N=function(e){function r(){var e;Object(c.a)(this,r),(e=Object(l.a)(this,Object(u.a)(r).call(this))).state={currentMap:""},e.notifyChild=null,e.signup=function(r){e.notifyChild=r};var a=window.location.hash.replace(/^#/,"");return b[a]?e.state.currentMap=a:(window.location.hash="#1979-baldwin",e.state.currentMap="1979-baldwin"),window.addEventListener("hashchange",function(){var r=window.location.hash.replace(/^#/,"");e.setState({currentMap:r}),e.notifyChild&&e.notifyChild(r)},!1),e}return Object(g.a)(r,e),Object(i.a)(r,[{key:"render",value:function(){var e=[];for(var r in b){var a=this.state.currentMap===r;e.push(n.a.createElement(j,{key:r,active:a,scanId:r,scan:b[r]}))}return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App__sidebar"},e),n.a.createElement("div",{className:"App__mapp"},n.a.createElement(M,{initialMap:this.state.currentMap,signup:this.signup})))}}]),r}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.6830e424.chunk.js.map