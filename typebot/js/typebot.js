typebot = function(e, s, d, t,b) {
  var _this = this;
  this.eI = 0;
  this.speed = s;
  this.delay = d;
  this.eLength = t.length;
  this.z = 0;
  this.lpc = 0;
  this.p = [];
  this.c_t = [];
  this.c_b = [];
  this.t = t;
  this.paused = false;
  this.done = function(f){_this.doneF = f;}
  this.onLayerDone = function(f){_this.onLayerDoneF = f;}
  this.whileTyping = function(f){_this.whileTypingF = f;}
  this.onstart = function(f){_this.called = true;_this.onstartF = f;loop();}
  function loop() {
    _this.p.push(document.createElement("div"));
    _this.p[_this.lpc].className = "typebot-container";
    _this.c_t.push(document.createElement("span"));
    _this.c_t[_this.lpc].className = "typebot-element";
    _this.c_b.push(document.createElement("span"));
    _this.c_b[_this.lpc].className = "typebot-blinker";
    if(b != undefined && b != false){
      _this.c_b[_this.lpc].innerHTML = "|";
    }
    _this.p[_this.lpc].appendChild(_this.c_t[_this.lpc]);
    _this.p[_this.lpc].appendChild(_this.c_b[_this.lpc]);
    _this.Es = document.querySelectorAll(e);
    for(_this.lx =0;_this.lx<_this.Es.length;_this.lx++){
      _this.Es[_this.lx].appendChild(_this.p[_this.lpc]);
    }
    _this.elements = _this.p;
    _this.blinker = _this.c_b[_this.lpc];
    _this.activeElement = _this.p[_this.lpc];  
    if("onstartF" in _this){
      _this.onstartF();
    }
    _this.infn = function() {
      if(!_this.paused){
        _this.c_t[_this.lpc].innerHTML += "<span class='typebot-letter'>"+_this.t[_this.eI][_this.z]+"</span>";   
        _this.cl_len = _this.c_t[_this.lpc].childNodes.length; 
        _this.letter = _this.c_t[_this.lpc].childNodes[_this.cl_len-1];                                      
        if (_this.z >= _this.t[_this.eI].length-1) {
          if(_this.z == _this.t[_this.eI].length-1){
            if("onLayerDoneF" in _this){
              _this.onLayerDoneF();
            }
          }
          clearInterval(_this.interval);
          _this.eI = _this.eI + 1;
          if (_this.eI + 1 <= t.length) {
            _this.z = 0;
            _this.lpc+=1;
            setTimeout(loop,d);
          }else{
            if("doneF" in _this){
              _this.doneF();
            }
          }
        } else {
          _this.z = _this.z + 1;
        }
        if("whileTypingF" in _this){
          _this.whileTypingF();
        }
      }
    }
    _this.interval = setInterval(_this.infn, s);
  }
  if(!this.called){
     loop();
  }
  this.pause = function(){_this.paused = true;}
  this.start = function(){_this.paused = false;}
  this.destroy = function(){clearInterval(_this.interval);}
}
