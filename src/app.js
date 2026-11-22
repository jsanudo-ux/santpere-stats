const CFG=Object.assign({env:'prod',db:'sp-prod',label:'',seed:null},window.SP_CFG||{});
let H=[],PL=[];
let LANG='es';
const T={
es:{title:'Estadísticas del partido',tabs:['Plantilla','Partido','Resumen','Historial','Temporada'],num:'Nº',name:'Nombre (dorsal opcional)',photoHint:'Toca 📷 para poner o cambiar la foto.',savePl:'💾 Guardar plantilla',rival:'Rival (contra quién jugamos)',points:'Puntos',onCourt:'En pista · 2/3 toques +2/+3 · ↑REB ↓FAL →AST ←REC',onCourtN:n=>`En pista: ${n}/5 — elige del banquillo`,subs:'🔄 Cambios',endSubs:'✔ Terminar cambios',bench:'Toca la que sale y después la que entra. Para varios cambios, marca primero todas las que salen.',doSubs:'Hacer cambios',pickEq:'Marca el mismo número de jugadoras que salen y que entran',benchOut:'Sacar sin cambio',
btn:{RE:'Rebote',RO:'Reb. Of.',RD:'Reb. Def.',AS:'Asist.',RB:'Recuperación',TP:'Tapón',PE:'Pérdida',FA:'Falta'},undo:'↶ Deshacer',redo:'↷ Rehacer',foulFx:'+1 FALTA',gFx:{FA:'+1 FALTA',RE:'+1 REB',AS:'+1 AST',RB:'+1 REC'},rivalPts:'Puntos del rival:',saveMatch:'💾 Guardar partido en el historial',copy:'Copiar resumen',del:'Borrar',back:'← Volver',remove:'Eliminar',totals:'Totales de la temporada',avgs:'Medias por partido',copySeason:'Copiar estadísticas de temporada',yes:'Sí',no:'No',
noRival:'(sin rival)',matches:'partidos',W:'G',L:'P',noMatches:'Aún no hay partidos guardados.',noMatchesH:'Aún no hay partidos guardados. Al terminar un partido, pulsa «Guardar partido» en Resumen.',addHint:'Añade jugadoras con nombre (el dorsal es opcional y se puede cambiar luego).',
cols:{J:'Jugadora',PJ:'Partidos jugados',PTS:'Puntos',T2:'Tiros de 2',T3:'Tiros de 3',TL:'Tiros libres',RO:'Rebotes ofensivos',RD:'Rebotes defensivos',REB:'Rebotes',AS:'Asistencias',RB:'Recuperaciones',TP:'Tapones',PE:'Pérdidas',FA:'Faltas'},total:'TOTAL',team:'EQUIPO',
ev:{'T2+':'Canasta de 2','T2-':'Fallo de 2','T3+':'Triple','T3-':'Fallo de 3','TL+':'Tiro libre','TL-':'Fallo TL',RE:'Rebote',RO:'Rebote of.',RD:'Rebote def.',AS:'Asistencia',RB:'Recuperación',TP:'Tapón',PE:'Pérdida',FA:'Falta'},
pickPlayer:'Elige una jugadora en pista',endSubsFirst:'Termina los cambios primero',foul5:n=>'⚠ 5ª falta de '+n,pickOut:'Toca primero la jugadora en pista que sale',subIn:'Entra',subOut:'Sale',
savingD:'Guardando…',plSaved:'Plantilla guardada.',localOnly:'Guardado solo en este móvil.',photoSet:'Foto puesta. Pulsa «Guardar plantilla» para no perderla.',nothing:'No hay estadísticas que guardar.',needRival:'Escribe el nombre del rival antes de guardar',
confSave:r=>`¿Guardar el partido contra ${r} y empezar uno nuevo?`,confDelP:'¿Quitar a esta jugadora y sus estadísticas del partido actual?',confDelH:'¿Eliminar este partido del historial?',confNew:'¿Borrar las estadísticas de este partido sin guardarlo? (La plantilla se conserva)',resSaved:'Resultado guardado.',copied:'Copiado. Pégalo en WhatsApp, Excel o notas.',copyFail:'No se pudo copiar.',
backup:'Copia de seguridad',bkCopy:'⬇️ Exportar copia completa',bkRestore:'⬆️ Importar copia',expOk:c=>`Copia exportada: ${c.jugadoras} jugadoras, ${c.partidos} partidos, ${c.acciones} acciones.`,impOk:(p,j)=>`Importado: ${p} partidos y ${j} jugadoras nuevas.`,holdImg:'Mantén pulsada la imagen para guardarla o compartirla.',upd:'Nueva versión disponible',updBtn:'Actualizar',bkPaste:'Pega aquí una copia de seguridad para restaurarla',bkOk:'Copia restaurada.',bkBad:'El texto no es una copia válida.',bkConf:'¿Importar esta copia? Se añadirán los partidos y jugadoras que falten; no se borra nada.',bkHint:'Exporta un archivo con todos los datos (jugadoras, fotos, partidos y partido en curso) y guárdalo en iCloud después de cada partido.',pts:'pts',home:'Local',away:'Visitante',fAll:'Todos',fHome:'En casa',fAway:'Fuera',fRivAll:'Todos los rivales',fNAll:'Toda la temporada',fLast:n=>`Últimos ${n}`,tapP:'Toca una jugadora para ver su ficha.',pg:'partido',cPts:'Puntos por partido',cFg:'% tiro de campo (T2+T3)',byMatch:'Partido a partido',shareJ:'📲 Compartir ficha',bestG:'Mejor partido',askBk:'Partido guardado. ¿Guardar ahora una copia en iCloud?',bkFull:'♻️ Restaurar copia completa (sustituye todo)',bkFullConf:(p,j)=>`Se BORRARÁN todos los datos actuales y se sustituirán por los de la copia (${p} partidos, ${j} jugadoras). ¿Continuar?`,bkFullOk:(p,j)=>`Restaurado: ${p} partidos y ${j} jugadoras.`,editBtn:'✏️ Corregir acciones',editDone:'✔ Terminar corrección',editHint:'Cambia el cuarto, la jugadora o la acción, o elimina las que sobren. Se guarda al momento. Arriba están las más recientes.',addAct:'＋ Añadir acción',delAct:'¿Eliminar esta acción?',rivHint:'1·2·3 toques · ↓ quitar',tFouls:n=>`Faltas de equipo: <b>${n}</b>`,bonus:'⚠ 4 faltas de equipo en este cuarto: a partir de ahora el rival tira tiros libres',tmBtn:n=>`⏱ Tiempo muerto · quedan ${n}`,tmNone:'⏱ Sin tiempos muertos',tmLog:'⏱ Tiempo muerto',ourTeam:'Nuestro equipo',rivalTeam:'Equipo rival',rivalPh:'Nombre del rival',whereQ:'¿Dónde juega Sant Pere?',homeB:'En casa (local)',awayB:'Fuera (visitante)',dateL:'Fecha del partido',prev:t=>`Se mostrará así: <b>${t}</b>`,rebL:{RO:'Rebote ofensivo',RD:'Rebote defensivo'},cat:'Cadete Femenino 1.er año',setup:'Configuración del partido',setupShort:'Configurar',start:'▶ Empezar a anotar',reset:'↺ Reiniciar estadísticas',delMatch:'🗑️ Eliminar partido',confDelM:'¿Eliminar el partido en curso? Se borran rival, fecha y estadísticas.',share:'📲 Compartir',shareImg:'📤 Compartir imagen',genImg:'Generando imagen…',noShare:'No se pudo compartir la imagen. Haz una captura de pantalla.',shareHint:'Haz una captura de pantalla de la tarjeta y envíala por WhatsApp, o copia el texto.',copyWa:'💬 Copiar texto para WhatsApp',close:'✕ Cerrar',top:'Destacadas',topPts:'Máxima anotadora',topReb:'Más rebotes',topAs:'Más asistencias',players:'Jugadoras',reb:'reb',ast:'asist',stl:'recup',of:'of',def:'def',blk:'tap',tov:'pérd',pf:'faltas',g:{REB:'Reb',RO:'R.Of',RD:'R.Def',AS:'Asist',RB:'Recup',TP:'Tap',PE:'Pérd',FA:'Falt'},win:'VICTORIA',loss:'DERROTA',draw:'EMPATE',teamW:'Equipo',shooting:'Tiro'},
ca:{title:'Estadístiques del partit',tabs:['Plantilla','Partit','Resum','Historial','Temporada'],num:'Núm.',name:'Nom (dorsal opcional)',photoHint:'Toca 📷 per posar o canviar la foto.',savePl:'💾 Desar plantilla',rival:'Rival (contra qui juguem)',points:'Punts',onCourt:'A pista · 2/3 tocs +2/+3 · ↑REB ↓FAL →AST ←REC',onCourtN:n=>`A pista: ${n}/5 — tria de la banqueta`,subs:'🔄 Canvis',endSubs:'✔ Acabar canvis',bench:'Toca la que surt i després la que entra. Per a diversos canvis, marca primer totes les que surten.',doSubs:'Fer canvis',pickEq:'Marca el mateix nombre de jugadores que surten i que entren',benchOut:'Treure sense canvi',
btn:{RE:'Rebot',RO:'Reb. Of.',RD:'Reb. Def.',AS:'Assist.',RB:'Recuperació',TP:'Tap',PE:'Pèrdua',FA:'Falta'},undo:'↶ Desfer',redo:'↷ Refer',foulFx:'+1 FALTA',gFx:{FA:'+1 FALTA',RE:'+1 REB',AS:'+1 AST',RB:'+1 REC'},rivalPts:'Punts del rival:',saveMatch:'💾 Desar partit a l\'historial',copy:'Copiar resum',del:'Esborrar',back:'← Tornar',remove:'Eliminar',totals:'Totals de la temporada',avgs:'Mitjanes per partit',copySeason:'Copiar estadístiques de temporada',yes:'Sí',no:'No',
noRival:'(sense rival)',matches:'partits',W:'G',L:'P',noMatches:'Encara no hi ha partits desats.',noMatchesH:'Encara no hi ha partits desats. En acabar un partit, prem «Desar partit» a Resum.',addHint:'Afegeix jugadores amb el nom (el dorsal és opcional i es pot canviar després).',
cols:{J:'Jugadora',PJ:'Partits jugats',PTS:'Punts',T2:'Tirs de 2',T3:'Tirs de 3',TL:'Tirs lliures',RO:'Rebots ofensius',RD:'Rebots defensius',REB:'Rebots',AS:'Assistències',RB:'Recuperacions',TP:'Taps',PE:'Pèrdues',FA:'Faltes'},total:'TOTAL',team:'EQUIP',
ev:{'T2+':'Cistella de 2','T2-':'Fallada de 2','T3+':'Triple','T3-':'Fallada de 3','TL+':'Tir lliure','TL-':'Fallada TL',RE:'Rebot',RO:'Rebot of.',RD:'Rebot def.',AS:'Assistència',RB:'Recuperació',TP:'Tap',PE:'Pèrdua',FA:'Falta'},
pickPlayer:'Tria una jugadora a pista',endSubsFirst:'Acaba els canvis primer',foul5:n=>'⚠ 5a falta de '+n,pickOut:'Toca primer la jugadora a pista que surt',subIn:'Entra',subOut:'Surt',
savingD:'Desant…',plSaved:'Plantilla desada.',localOnly:'Desat només en aquest mòbil.',photoSet:'Foto posada. Prem «Desar plantilla» per no perdre-la.',nothing:'No hi ha estadístiques per desar.',needRival:'Escriu el nom del rival abans de desar',
confSave:r=>`Desar el partit contra ${r} i començar-ne un de nou?`,confDelP:'Treure aquesta jugadora i les seves estadístiques del partit actual?',confDelH:'Eliminar aquest partit de l\'historial?',confNew:'Esborrar les estadístiques d\'aquest partit sense desar-lo? (La plantilla es conserva)',resSaved:'Resultat desat.',copied:'Copiat. Enganxa-ho a WhatsApp, Excel o notes.',copyFail:'No s\'ha pogut copiar.',
backup:'Còpia de seguretat',bkCopy:'⬇️ Exportar còpia completa',bkRestore:'⬆️ Importar còpia',expOk:c=>`Còpia exportada: ${c.jugadoras} jugadores, ${c.partidos} partits, ${c.acciones} accions.`,impOk:(p,j)=>`Importat: ${p} partits i ${j} jugadores noves.`,holdImg:'Mantén premuda la imatge per desar-la o compartir-la.',upd:'Nova versió disponible',updBtn:'Actualitzar',bkPaste:'Enganxa aquí una còpia de seguretat per restaurar-la',bkOk:'Còpia restaurada.',bkBad:'El text no és una còpia vàlida.',bkConf:'Importar aquesta còpia? S\'afegiran els partits i jugadores que faltin; no s\'esborra res.',bkHint:'Exporta un arxiu amb totes les dades (jugadores, fotos, partits i partit en curs) i desa\'l a iCloud després de cada partit.',pts:'pts',home:'Local',away:'Visitant',fAll:'Tots',fHome:'A casa',fAway:'Fora',fRivAll:'Tots els rivals',fNAll:'Tota la temporada',fLast:n=>`Últims ${n}`,tapP:'Toca una jugadora per veure la seva fitxa.',pg:'partit',cPts:'Punts per partit',cFg:'% tir de camp (T2+T3)',byMatch:'Partit a partit',shareJ:'📲 Compartir fitxa',bestG:'Millor partit',askBk:'Partit desat. Vols desar ara una còpia a iCloud?',bkFull:'♻️ Restaurar còpia completa (ho substitueix tot)',bkFullConf:(p,j)=>`S\'ESBORRARAN totes les dades actuals i se substituiran per les de la còpia (${p} partits, ${j} jugadores). Continuar?`,bkFullOk:(p,j)=>`Restaurat: ${p} partits i ${j} jugadores.`,editBtn:'✏️ Corregir accions',editDone:'✔ Acabar correcció',editHint:'Canvia el quart, la jugadora o l\'acció, o elimina les que sobrin. Es desa al moment. A dalt hi ha les més recents.',addAct:'＋ Afegir acció',delAct:'Eliminar aquesta acció?',rivHint:'1·2·3 tocs · ↓ treure',tFouls:n=>`Faltes d'equip: <b>${n}</b>`,bonus:'⚠ 4 faltes d\'equip en aquest quart: a partir d\'ara el rival tira tirs lliures',tmBtn:n=>`⏱ Temps mort · en queden ${n}`,tmNone:'⏱ Sense temps morts',tmLog:'⏱ Temps mort',ourTeam:'El nostre equip',rivalTeam:'Equip rival',rivalPh:'Nom del rival',whereQ:'On juga el Sant Pere?',homeB:'A casa (local)',awayB:'Fora (visitant)',dateL:'Data del partit',prev:t=>`Es mostrarà així: <b>${t}</b>`,rebL:{RO:'Rebot ofensiu',RD:'Rebot defensiu'},cat:'Cadet Femení 1r any',setup:'Configuració del partit',setupShort:'Configurar',start:'▶ Començar a anotar',reset:'↺ Reiniciar estadístiques',delMatch:'🗑️ Eliminar partit',confDelM:'Eliminar el partit en curs? S\'esborren rival, data i estadístiques.',share:'📲 Compartir',shareImg:'📤 Compartir imatge',genImg:'Generant imatge…',noShare:'No s\'ha pogut compartir la imatge. Fes una captura de pantalla.',shareHint:'Fes una captura de pantalla de la targeta i envia-la per WhatsApp, o copia el text.',copyWa:'💬 Copiar text per a WhatsApp',close:'✕ Tancar',top:'Destacades',topPts:'Màxima anotadora',topReb:'Més rebots',topAs:'Més assistències',players:'Jugadores',reb:'reb',ast:'assist',stl:'recup',of:'of',def:'def',blk:'taps',tov:'pèrd',pf:'faltes',g:{REB:'Reb',RO:'R.Of',RD:'R.Def',AS:'Assist',RB:'Recup',TP:'Taps',PE:'Pèrd',FA:'Falt'},win:'VICTÒRIA',loss:'DERROTA',draw:'EMPAT',teamW:'Equip',shooting:'Tir'}};
let L=T[LANG]||T.es;
const TEAM='Sant Pere';
const nm2=j=>{const p=String(j.n).split(' ');return`<span class="nm2">${esc(p[0])}<b>${esc(p.slice(1).join(' '))||'&nbsp;'}</b></span>`};
const jer=d=>`<svg class="jer" viewBox="-2 -2 74 92" width="40" height="46" aria-hidden="true"><path d="M15 0 L26 0 Q35 13 44 0 L55 0 L58 15 Q62 25 70 27 L70 82 Q35 88 0 82 L0 27 Q8 25 12 15 Z" fill="#D7141A" stroke="#fff" stroke-width="3"/><text x="35" y="62" text-anchor="middle" fill="#fff" font-size="${String(d).length>1?26:30}" font-weight="800" font-family="system-ui,sans-serif">${esc(d||'')}</text></svg>`;
const LOGO='logo.jpg';
const KEYS=['T2+','T2-','T3+','T3-','TL+','TL-','RE','RO','RD','AS','RB','TP','PE','FA'];
const hoy=()=>new Date().toISOString().slice(0,10);
let S={jug:[],ev:[],q:1,pista:[],jugaron:[],rival:'',fecha:hoy(),rp:''},cur=null,hSel=null,cambio=false,cSel=null,OUT=[],IN=[],fsel=null,curTab='equipo';
const cl=o=>JSON.parse(JSON.stringify(o));
const DB={db:null,open(){return new Promise((ok,ko)=>{const r=indexedDB.open(CFG.db,1);r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains('kv'))r.result.createObjectStore('kv')};r.onsuccess=()=>{this.db=r.result;ok()};r.onerror=()=>ko(r.error)})},
get(k){return new Promise(ok=>{try{const q=this.db.transaction('kv').objectStore('kv').get(k);q.onsuccess=()=>ok(q.result);q.onerror=()=>ok(undefined)}catch(e){ok(undefined)}})},
set(k,v){return new Promise((ok,ko)=>{try{const t=this.db.transaction('kv','readwrite');t.objectStore('kv').put(v,k);t.oncomplete=()=>ok(true);t.onerror=()=>ko(t.error);t.onabort=()=>ko(t.error)}catch(e){ko(e)}})}};
const $=id=>document.getElementById(id);
const esc=t=>String(t??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const av=j=>j&&j.f?`<img class="av" src="${j.f}">`:'';
const tav=j=>j&&j.f?`<img class="tav" src="${j.f}">`:'';
const dn=j=>(j.d!==''&&j.d!=null?'#'+j.d+' ':'')+j.n;
const actual=j=>S.jug.find(x=>x.id===j.id)||j;
const ord=(a,b)=>(a.d===''?999:+a.d)-(b.d===''?999:+b.d);
const qn=q=>q<5?'C'+q:'PR';
const fmtF=f=>f?f.split('-').reverse().join('/'):'';
const resTxt=(a,b)=>b===''||b==null?`${a} ${L.pts}`:`${a} - ${b}`;
function save(){if(DB.db)DB.set('S',cl(S)).catch(()=>{})}

const CSS=`*{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,sans-serif}
body{background:#141010;color:#eee;padding:10px;max-width:600px;margin:auto}
.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
h1{font-size:18px}h2{font-size:16px;margin:4px 0 8px}
.lang button{padding:6px 10px;font-size:13px}
.tabs{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-bottom:10px}
button{background:#2a2a2a;color:#eee;border:1px solid #444;border-radius:8px;padding:12px 6px;font-size:15px;font-weight:600}
button:active{background:#444}
.tabs button{font-size:12px;padding:10px 2px}
h1{color:#fff}h1 b{color:#f6c500}
.top{border-bottom:3px solid #d7141a;padding-bottom:8px;box-shadow:0 3px 0 #f6c500}
button.on{background:#d7141a;border-color:#d7141a;color:#fff}
.players,.bench{display:grid;grid-template-columns:repeat(5,1fr);gap:5px;margin-bottom:10px}
.players button,.bench button{padding:6px 2px;font-size:11px;height:112px;overflow:hidden;word-break:break-word;line-height:1.15;display:flex;flex-direction:column;align-items:center;justify-content:center}
.bench button{opacity:.75}
.players .d,.bench .d{font-size:20px;display:block;min-height:24px}
.bench button.sel{background:#1a5fb4!important;border-color:#1a5fb4!important;opacity:1}
.players button.sel{background:#1a5fb4;border-color:#1a5fb4}
.av{width:40px;height:40px;border-radius:50%;object-fit:cover;display:block;margin:0 auto 3px}
.tav{width:22px;height:22px;border-radius:50%;object-fit:cover;vertical-align:middle;margin-right:4px}
.lbl{font-size:13px;color:#999;margin:4px 0}
.score{display:flex;justify-content:space-between;align-items:center;background:#1c1c1c;border-radius:10px;padding:10px;margin-bottom:10px}
.score b{font-size:34px}
.q{display:flex;gap:4px}.q button{padding:8px 10px}
.match{display:flex;gap:6px;margin-bottom:8px}
.match input:first-child{flex:1}.match input[type=date]{width:140px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.ok{background:#1d4d2b;border-color:#2e7d45}
.ok.main{background:#d7141a;border-color:#d7141a}.ko{background:#5a1f1f;border-color:#8a2f2f}
input,textarea{background:#222;color:#eee;border:1px solid #444;border-radius:8px;padding:12px;font-size:16px;min-width:0}
textarea{width:100%;height:80px;font-size:12px;margin:6px 0}
.row{display:flex;gap:6px;margin-bottom:8px}
.row input:first-child{width:70px}.row input:nth-child(2){flex:1}
.list>div{display:flex;justify-content:space-between;align-items:center;padding:8px;border-bottom:1px solid #333;gap:6px}
.list .info{flex:1}.plnm{font-size:20px;font-weight:800;letter-spacing:.3px;line-height:1.15;padding-left:4px}.list small{color:#999}
.tw{overflow-x:auto}
table{width:100%;border-collapse:collapse;font-size:12px}
th,td{padding:5px 3px;text-align:center;border-bottom:1px solid #333;white-space:nowrap}
th{color:#f6c500;vertical-align:bottom}
th.v{writing-mode:vertical-rl;transform:rotate(180deg);padding:6px 2px;font-size:11px;line-height:1.1;text-align:left}
td:first-child,th:first-child{text-align:left;position:sticky;left:0;background:#111}
.log{font-size:13px;color:#aaa;margin-top:10px;max-height:150px;overflow:auto}
.warn{color:#ff5555}.hide{display:none!important}
.modal{position:fixed;inset:0;background:#000c;display:flex;align-items:center;justify-content:center;padding:20px}
.modal>div{background:#222;padding:20px;border-radius:10px;text-align:center}
.modal button{margin:10px 5px 0}
.msg{margin-top:8px;font-size:13px;color:#8c8}
.res{font-size:22px;font-weight:700;margin-bottom:8px}
.win{color:#5c5}.lose{color:#f66}
.sh{position:fixed;inset:0;background:#000;overflow:auto;padding:12px;z-index:9}
.card{max-width:420px;margin:0 auto;background:linear-gradient(160deg,#5a0d10,#1a0b0c 45%,#0d0d0d);border:1px solid #333;border-radius:18px;padding:18px;box-shadow:0 0 0 2px #d7141a66}
.card .hd{text-align:center}.card .vs{font-size:13px;color:#aaa;letter-spacing:1px;text-transform:uppercase}
.card .riv{font-size:22px;font-weight:800;margin:2px 0}
.card .sc{font-size:54px;font-weight:900;line-height:1;margin:10px 0 4px;letter-spacing:-1px}
.card .sc span{color:#d7141a}
.badge{display:inline-block;padding:3px 12px;border-radius:20px;font-size:12px;font-weight:800;letter-spacing:1px}
.bw{background:#1d4d2b;color:#7f7}.bl{background:#5a1f1f;color:#f99}.bd{background:#333;color:#ddd}
.card h3{font-size:12px;color:#f6c500;text-transform:uppercase;letter-spacing:1px;margin:16px 0 8px}
.tops{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.tops div{background:#ffffff0d;border-radius:12px;padding:8px 4px;text-align:center;font-size:11px;color:#aaa}
.tops b{display:block;font-size:22px;color:#fff}.tops i{display:block;font-style:normal;color:#eee;font-size:12px;margin-top:2px}
.pl{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #ffffff12}
.pl .ph{width:38px;height:38px;border-radius:50%;object-fit:cover;background:#333;flex:none;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;color:#d7141a}
.pl .nm{flex:1;font-size:14px;font-weight:700}.pl .nm small{display:block;font-weight:400;color:#999;font-size:11px;margin-top:2px}
.pl .p{font-size:22px;font-weight:900;color:#f6c500;text-align:right}.pl .p small{display:block;font-size:10px;color:#999;font-weight:400}
.pb{padding:10px 0;border-bottom:1px solid #ffffff12}
.pb .pl{border:0;padding:0 0 8px}
.sg{display:grid;grid-template-columns:repeat(8,1fr);gap:3px;margin-bottom:3px}
.sg.s3{grid-template-columns:repeat(3,1fr)}
.sg div{background:#ffffff0a;border-radius:6px;padding:4px 1px;text-align:center}
.sg b{display:block;font-size:15px;font-weight:800;color:#fff}
.sg small{display:block;font-size:8.5px;color:#999;text-transform:uppercase;letter-spacing:.3px;white-space:nowrap}
.sg.s3 b{font-size:15px}.sg.s3 i{font-style:normal;color:#f6c500;font-size:11px;font-weight:700;margin-left:4px}
.sg .z b{color:#555}
.ft{margin-top:12px;font-size:12px;color:#aaa;text-align:center;line-height:1.6}
.shb{max-width:420px;margin:12px auto;display:grid;gap:8px}
.box{margin-top:18px;padding-top:10px;border-top:1px solid #333}`;

function build(){
const t=L.tabs,ids=['equipo','partido','resumen','historial','temporada'];
document.body.innerHTML=`<style>${CSS}</style>
<div class="top"><div class="brand"><img src="logo.jpg" class="logo" alt=""><div><div class="tname">Sant Pere Bàsquet</div><div class="tcat">${L.cat}</div></div></div><div class="hr"><button id="bCfg" aria-label="${L.setupShort}" onclick="setView('cfg')">⚙️</button><div class="lang"><button id="l-es" onclick="setLang('es')">ES</button><button id="l-ca" onclick="setLang('ca')">CA</button></div></div></div>
<div class="tabs">${ids.map((x,i)=>`<button id="t-${x}" onclick="tab('${x}')">${t[i]}</button>`).join('')}</div>
<section id="equipo">
<div class="row"><input id="dorsal" type="number" inputmode="numeric" placeholder="${L.num}"><input id="nombre" placeholder="${L.name}"><button onclick="addP()">＋</button></div>
<div class="list" id="lista"></div>
<button class="ok" style="width:100%;margin-top:8px" onclick="guardarPl()">${L.savePl}</button>
<p id="plmsg" class="msg"></p>
<input type="file" id="finput" accept="image/*" class="hide" onchange="cargaFoto(this)">
</section>
<section id="partido" class="hide">
<div id="pcfg"><h2>${L.setup}</h2>
<div class="mup"><div class="mrow"><span class="mlab">${L.ourTeam}</span><div class="mteam"><img src="logo.jpg" alt="">Sant Pere</div></div>
<div class="mvs">vs</div>
<div class="mrow"><span class="mlab">${L.rivalTeam}</span><input id="rival" placeholder="${L.rivalPh}" oninput="S.rival=this.value;save();prevM()"></div></div>
<div class="lbl" style="margin-top:12px">${L.whereQ}</div>
<div class="grid" style="grid-template-columns:1fr 1fr;margin-bottom:10px"><button id="bL" onclick="setLoc('L')">🏠 ${L.homeB}</button><button id="bV" onclick="setLoc('V')">🚌 ${L.awayB}</button></div>
<div class="lbl">${L.dateL}</div><input id="fecha" type="date" style="width:100%" onchange="S.fecha=this.value;save()">
<div class="mprev" id="mprev"></div>
<div class="grid" style="grid-template-columns:1fr 1fr;margin-top:8px"><button onclick="nuevo()">${L.reset}</button><button class="ko" onclick="eliminarM()">${L.delMatch}</button></div>
<button class="on" style="width:100%;margin-top:16px;padding:16px;font-size:17px" onclick="setView('play')">${L.start}</button>
</div>
<div id="pplay">
<div class="score sb" id="marc"></div>
<div class="tinfo"><span id="tfal"></span><div class="q" id="cuartos"></div></div>
<div class="lbl" id="lblPista"></div>
<div class="players" id="sel"></div>
<button id="bCambio" onclick="modoCambio()" style="width:100%;margin-bottom:8px"></button>
<div id="zonaBanco" class="hide"><div class="lbl">${L.bench}</div><div class="bench" id="banco"></div></div>
<div class="grid">
<button class="ok" onclick="act('TL+')">TL ✔</button><button class="ok" onclick="act('T3+')">3 ✔</button><button class="ok" onclick="act('T2+')">2 ✔</button>
<button class="ko" onclick="act('TL-')">TL ✘</button><button class="ko" onclick="act('T3-')">3 ✘</button><button class="ko" onclick="act('T2-')">2 ✘</button>
${['RE','AS','RB','TP','FA'].map(k=>`<button${k==='RE'?' class="rbb"':''}${k==='FA'?' style="grid-column:span 2"':''} onclick="act('${k}')">${k==='RE'?`<span class="rbk"><b>REB</b><small>${L.btn.RE}</small></span>`:L.btn[k]}</button>`).join('')}<div style="grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr;gap:6px"><button onclick="undo()">${L.undo}</button><button id="bRedo" onclick="redo()">${L.redo}</button></div>
</div>
<div class="log" id="log"></div>
</div>
</section>
<section id="resumen" class="hide">
<h2 id="titRes"></h2>
<div class="tw"><table id="tabla"></table></div>
<div class="row" style="margin-top:10px;align-items:center"><span style="flex:1">${L.rivalPts}</span><input id="rp" type="number" inputmode="numeric" style="width:90px" oninput="S.rp=this.value;save()"></div>
<div class="grid">
<button class="ok" style="grid-column:span 3" onclick="guardar()">${L.saveMatch}</button>
<button class="on" style="grid-column:span 3" onclick="compartir(null)">${L.share}</button>
<button onclick="copiar(_rows)" style="grid-column:span 2">${L.copy}</button><button onclick="nuevo()">${L.del}</button>
</div>
<p id="msg" class="msg"></p>
</section>
<section id="historial" class="hide">
<div id="hlist" class="list"></div>
<div id="hdet" class="hide">
<button onclick="verH(null)" style="margin-bottom:10px">${L.back}</button>
<div id="hhead"></div>
<div class="tw"><table id="htabla"></table></div>
<button style="width:100%;margin-top:10px" id="bEdit" onclick="editH()">${L.editBtn}</button><div id="hedit"></div>
<div class="grid" style="margin-top:10px"><button class="on" style="grid-column:span 3" onclick="compartir(hSel)">${L.share}</button><button style="grid-column:span 2" onclick="copiar(_hrows)">${L.copy}</button><button class="ko" onclick="borrarH()">${L.remove}</button></div>
<p id="hmsg" class="msg"></p>
</div>
<div class="box" id="bkbox"><h2>${L.backup}</h2><p class="lbl">${L.bkHint}</p>
<button style="width:100%" onclick="exportar()">${L.bkCopy}</button>
<input type="file" id="bkfile" class="hide" onchange="importar(this)">
<button style="width:100%" onclick="pideImport()">${L.bkRestore}</button><button class="ko" style="width:100%;margin-top:8px" onclick="pideImport(1)">${L.bkFull}</button><p id="bkmsg" class="msg"></p></div>
</section>
<section id="temporada" class="hide">
<div id="tmain"><div class="tfil"><select id="fLoc" onchange="TF.loc=this.value;renderTemp()"></select><select id="fRiv" onchange="TF.riv=this.value;renderTemp()"></select><select id="fN" onchange="TF.n=+this.value;renderTemp()"></select></div>
<div id="tresumen" class="res"></div><p class="lbl">${L.tapP}</p>
<div class="lbl">${L.totals}</div>
<div class="tw"><table id="ttot"></table></div>
<div class="lbl" style="margin-top:12px">${L.avgs}</div>
<div class="tw"><table id="tmed"></table></div>
<div class="grid" style="margin-top:10px"><button style="grid-column:span 3" onclick="copiar(_trows)">${L.copySeason}</button></div></div>
<div id="ficha" class="hide"></div>
</section>
<div class="sh hide" id="share"></div>
<div class="modal hide" id="modal"><div><p id="mtxt"></p><button id="msi">${L.yes}</button><button onclick="cerrar()">${L.no}</button></div></div>`;
document.documentElement.lang=LANG;if(CFG.label){const e=document.createElement('div');e.className='envb';e.textContent=CFG.label;(document.querySelector('.tcat')||document.body).appendChild(e)}
if(!document.getElementById('corp')){const cs=document.createElement('style');cs.id='corp';cs.textContent=`body{background:#121212!important}
button.on{background:#d7141a!important;border-color:#d7141a!important;color:#fff!important}
.top{background:linear-gradient(90deg,#d7141a,#a80f14);margin:-10px -10px 12px!important;padding:10px 12px;border-bottom:3px solid #fff;box-shadow:none!important}
.brand{display:flex;align-items:center;gap:10px}
.logo{width:52px;height:48px;object-fit:cover;border-radius:10px;background:#fff;border:2px solid #fff}
.club{font-size:11px;font-weight:800;letter-spacing:1.5px;color:#fff;opacity:.9}
.top h1{color:#fff;font-size:17px}
.lang button{background:#ffffff22;border-color:#ffffff66;color:#fff}
.lang button.on{background:#fff!important;color:#d7141a!important;border-color:#fff!important}
th{color:#fff!important;background:#d7141a22}
td:first-child,th:first-child{background:#121212!important}
.score{background:linear-gradient(135deg,#d7141a,#7a0b0f)!important;color:#fff}
.card{background:linear-gradient(165deg,#d7141a,#8d0e12 40%,#141010)!important;border:2px solid #fff!important;box-shadow:none!important}
.card h3{color:#fff!important;border-bottom:1px solid #ffffff44;padding-bottom:4px}
.pl .p,.sg.s3 i,.card .sc span{color:#fff!important}
.pl .ph{color:#d7141a!important;background:#fff!important}
.card .vs{color:#fff!important}
.clogo{width:70px;height:64px;object-fit:cover;border-radius:12px;background:#fff;display:block;margin:0 auto 6px}
.sg div,.tops div{background:#ffffff14!important}`;document.head.appendChild(cs)}
if(!document.getElementById('bcf')){const lk=document.createElement('link');lk.id='bcf';lk.rel='stylesheet';lk.href='fonts/fonts.css';document.head.appendChild(lk)}
if(!document.getElementById('pro')){const ps=document.createElement('style');ps.id='pro';ps.textContent=`body{background:radial-gradient(130% 50% at 50% -10%,#4a0a0e 0%,#140708 45%,#0a0a0b 100%) fixed!important}
button{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:12px;transition:transform .08s}
button:active{transform:scale(.97)}
button.on{background:linear-gradient(135deg,#e3161d,#a50e13)!important;box-shadow:0 6px 18px rgba(215,20,26,.35)}
.ok{background:linear-gradient(135deg,rgba(46,160,80,.35),rgba(30,90,50,.35))!important;border-color:rgba(80,200,120,.4)!important}
.ko{background:rgba(200,30,40,.22)!important;border-color:rgba(255,80,90,.35)!important}
input,textarea{background:rgba(255,255,255,.06)!important;border:1px solid rgba(255,255,255,.14)!important;border-radius:12px!important}
.top{background:linear-gradient(120deg,rgba(227,22,29,.96),rgba(150,12,18,.92))!important;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);position:sticky;top:0;z-index:5;border-bottom:1px solid rgba(255,255,255,.35)!important;box-shadow:0 8px 24px rgba(0,0,0,.45)!important;border-radius:0 0 18px 18px}
.tabs button{border-radius:999px}
.score{border-radius:18px!important;border:1px solid rgba(255,255,255,.18)!important;box-shadow:0 10px 30px rgba(215,20,26,.25)}
.tw{border-radius:14px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.08)}
th{background:rgba(255,255,255,.06)!important}
td:first-child,th:first-child{background:rgba(22,9,10,.95)!important}
.list>div{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07)!important;border-radius:12px;margin-bottom:6px}
.mb{border:1px solid rgba(255,255,255,.3)!important;box-shadow:0 12px 30px rgba(215,20,26,.3)}
.players button,.bench button{border-radius:14px}
.fx{position:fixed;z-index:60;pointer-events:none;font:800 46px/1 'Barlow Condensed',system-ui,sans-serif;color:#fff;text-shadow:0 0 18px rgba(215,20,26,.95),0 4px 10px rgba(0,0,0,.6);transform:translate(-50%,-50%);animation:fly 2.4s cubic-bezier(.2,.8,.3,1) forwards;display:flex;align-items:center;gap:4px;white-space:nowrap}
.fx3{font-size:52px;color:#fff3}.fx3{color:#fff}.fx span{font-size:40px}
@keyframes fly{0%{opacity:0;transform:translate(-50%,-30%) scale(.4)}10%{opacity:1;transform:translate(-50%,-70%) scale(1.3)}20%{transform:translate(-50%,-95%) scale(1)}70%{opacity:1;transform:translate(-50%,-200%) scale(1)}100%{opacity:0;transform:translate(-50%,-290%) scale(.9)}}
.fxr{position:fixed;z-index:59;pointer-events:none;width:30px;height:30px;border-radius:50%;border:3px solid #fff;transform:translate(-50%,-50%);animation:ring 1s ease-out forwards}
@keyframes ring{0%{opacity:.9;width:20px;height:20px}100%{opacity:0;width:150px;height:150px;border-width:1px}}
#sel button.pop{animation:pop .35s ease-out}@keyframes pop{0%{transform:scale(1)}40%{transform:scale(1.12)}100%{transform:scale(1)}}
.players button,.bench button{touch-action:manipulation}
.rbb{padding-top:4px!important;padding-bottom:4px!important}
.rbk{display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1}
.rbk b{font-size:17px;font-weight:800}
.rbk small{font-size:10px;font-weight:500;margin-top:2px;white-space:nowrap;opacity:.85}
#sel button{touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
#bRedo:disabled{opacity:.35}
#sel button.gFA{box-shadow:0 0 0 3px #ffd60a,0 8px 20px rgba(255,214,10,.35)!important}#sel button.gRE{box-shadow:0 0 0 3px #30d158,0 8px 20px rgba(48,209,88,.35)!important}#sel button.gAS{box-shadow:0 0 0 3px #64d2ff,0 8px 20px rgba(100,210,255,.35)!important}#sel button.gRB{box-shadow:0 0 0 3px #bf5af2,0 8px 20px rgba(191,90,242,.35)!important}
.fxRE{color:#30d158!important}.fxAS{color:#64d2ff!important}.fxRB{color:#bf5af2!important}
.fxf{font-size:30px!important;color:#ffd60a!important;text-shadow:0 0 14px rgba(0,0,0,.8),0 2px 6px rgba(0,0,0,.6)!important}
.envb{display:inline-block;margin-left:6px;vertical-align:1px;letter-spacing:1px!important;background:#ffd60a;color:#000;font:800 11px system-ui;padding:3px 10px;border-radius:10px;letter-spacing:1px;pointer-events:none}
#updb{position:fixed;left:10px;right:10px;bottom:calc(env(safe-area-inset-bottom) + 10px);z-index:120;display:flex;align-items:center;justify-content:space-between;gap:10px;background:rgba(30,30,32,.95);border:1px solid rgba(255,255,255,.2);border-radius:14px;padding:10px 12px;color:#fff;font-size:14px}
#updb button{padding:8px 14px;background:#d7141a;border-color:#d7141a;color:#fff}
.imgv{position:fixed;inset:0;z-index:130;background:rgba(0,0,0,.92);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:calc(env(safe-area-inset-top) + 10px) 10px calc(env(safe-area-inset-bottom) + 10px)}
.imgv img{max-width:100%;max-height:80vh;border-radius:12px;-webkit-touch-callout:default}
.imgv p{color:#fff;font-size:14px;text-align:center}
body{padding-top:calc(env(safe-area-inset-top) + 10px)!important}
.jer{display:block;margin:0 auto 5px;flex:none}
.tname{font:800 21px/1.05 'Barlow Condensed',system-ui,sans-serif;letter-spacing:1.5px;text-transform:uppercase;color:#fff}
.tcat{font-size:11.5px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#fff;opacity:.85;margin-top:3px}
.top body.playing #marc{margin:6px 0 14px}body.playing .tinfo{margin:0 0 28px}
.hr{display:flex;align-items:center;gap:10px;align-self:flex-start;flex:none}.hr .lang{align-self:center}
#bCfg{display:none;width:34px;height:34px;padding:0;font-size:18px;line-height:32px;border-radius:50%;background:rgba(0,0,0,.25)!important;border:1px solid rgba(255,255,255,.45)!important}
body.playing #bCfg{display:block}
.lang{display:flex;align-self:flex-start;border:1px solid rgba(255,255,255,.45);border-radius:999px;overflow:hidden;flex:none}
.top .lang button{padding:3px 8px!important;font-size:10.5px!important;font-weight:700;border:0!important;border-radius:0!important;background:transparent!important;color:rgba(255,255,255,.8)!important;box-shadow:none!important}
.top .lang button.on{background:#fff!important;color:#d7141a!important}
.mup{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:12px}
.mrow{display:flex;flex-direction:column;gap:5px}.mlab{font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#999}
.mteam{display:flex;align-items:center;gap:8px;font:800 20px 'Barlow Condensed',system-ui;text-transform:uppercase;letter-spacing:1px;padding:8px 10px;border-radius:12px;background:rgba(215,20,26,.25);border:1px solid rgba(215,20,26,.5)}
.mteam img{width:28px;height:28px;border-radius:6px;object-fit:cover;background:#fff}
.mvs{text-align:center;font:800 14px 'Barlow Condensed',system-ui;color:#888;margin:6px 0;letter-spacing:2px}
#rival{width:100%}
.tinfo{display:flex;justify-content:space-between;align-items:center;gap:8px;margin:-4px 0 10px}
.tinfo .q{gap:4px}.tinfo .q button{padding:6px 9px;font-size:13px;min-width:0}
.score.sb{display:grid;grid-template-columns:1fr auto 1fr;align-items:start;gap:6px;padding:12px 10px}
.sbt{display:flex;flex-direction:column;align-items:center;min-width:0;text-align:center}
.sbt span{font:800 15px 'Barlow Condensed',system-ui;letter-spacing:1px;text-transform:uppercase;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;opacity:.95}
.score.sb .sbt b{font:800 52px/1 'Barlow Condensed',system-ui;margin-top:2px}
.score.sb .sbt.rv b{opacity:.8}.score.sb .sbd{font:800 34px/1 'Barlow Condensed',system-ui;opacity:.6;padding-top:26px}
#rvb{touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;cursor:pointer;border-radius:12px;padding:2px 4px}
#rvb.pop{animation:pop .35s ease-out}#rvb.gdel{background:rgba(0,0,0,.25)}
.rhint{font-size:10.5px;opacity:.7;margin-top:4px;white-space:nowrap}
#tfal{font-size:13px;color:#ccc;padding:6px 10px;border-radius:10px;background:rgba(255,255,255,.06)}#tfal.bonus{background:rgba(255,214,10,.2);color:#ffd60a;border:1px solid rgba(255,214,10,.5)}
#bTM{padding:7px 12px;font-size:13px}#bTM:disabled{opacity:.4}
#toastb{position:fixed;left:10px;right:10px;top:calc(env(safe-area-inset-top) + 8px);z-index:110;display:flex;align-items:center;justify-content:space-between;gap:10px;background:rgba(28,28,30,.96);border:1px solid rgba(255,255,255,.18);border-radius:14px;padding:10px 12px;color:#fff;font-size:15px;font-weight:600;transform:translateY(-160%);transition:transform .25s ease;pointer-events:none;box-shadow:0 8px 24px rgba(0,0,0,.5)}
#toastb.on{transform:none;pointer-events:auto}#toastb button{padding:8px 12px;font-size:14px;flex:none}
body.playing .top{padding:6px 10px!important;margin-bottom:8px!important}body.playing .logo{width:30px;height:28px;border-radius:7px}body.playing .tname{font-size:16px}body.playing .tcat{display:none}
body.playing .tabs{margin-bottom:6px}body.playing .tabs button{padding:7px 2px}
body.playing .score{padding:6px 10px!important;margin-bottom:8px}body.playing .score b{font-size:28px}body.playing .q button{padding:6px 9px}
body.playing #pplay>div:first-child{margin-bottom:4px!important}
.er{display:grid;grid-template-columns:52px 1fr 1fr 40px;gap:4px;margin-bottom:4px}
.er select{background:rgba(255,255,255,.06);color:#eee;border:1px solid rgba(255,255,255,.14);border-radius:10px;padding:8px 4px;font-size:13px;min-width:0}
.er button{padding:6px 0}
.tfil{display:grid;grid-template-columns:1fr 1.3fr 1.2fr;gap:6px;margin-bottom:10px}
.tfil select{background:rgba(255,255,255,.06);color:#eee;border:1px solid rgba(255,255,255,.14);border-radius:10px;padding:9px 6px;font-size:13px;min-width:0}
tr.clk{cursor:pointer}tr.clk td:first-child{text-decoration:underline dotted rgba(255,255,255,.4)}
.fhd{display:flex;align-items:center;gap:12px;margin-bottom:10px}.fhd .jer{flex:none;margin:0}.fav{width:56px;height:56px;border-radius:50%;object-fit:cover}
.fnm{font:800 24px 'Barlow Condensed',system-ui;text-transform:uppercase;letter-spacing:1px}
.fch{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:6px}.fch.f3{grid-template-columns:repeat(3,1fr)}
.fch div{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:8px 4px;text-align:center}.fch b{display:block;font:800 24px 'Barlow Condensed',system-ui}.fch span{font-size:10px;color:#aaa}
#ficha h2{margin-top:14px}.chart{width:100%;height:auto;display:block}
.mprev{margin-top:12px;font-size:13px;color:#bbb;text-align:center}.mprev b{color:#fff}
.players button,.bench button{justify-content:flex-start!important;padding-top:10px!important;height:100px!important}
.players .av,.bench .av{width:46px!important;height:46px!important;margin:0 auto 5px!important;flex:none}
.nm2{display:block;width:100%;line-height:1.2;font-size:11.5px}
.nm2 b{display:block;font-weight:600;font-size:9.5px;letter-spacing:-.2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.modal>div{background:rgba(30,30,32,.88)!important;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.12);border-radius:18px!important}`;document.head.appendChild(ps)}
$('l-'+LANG).classList.add('on');
tab(curTab);gestos();rivGestos()}
function setLang(l){LANG=l;L=T[l];if(DB.db)DB.set('L',l).catch(()=>{});build()}
function tab(t){curTab=t;['equipo','partido','resumen','historial','temporada'].forEach(x=>{$(x).classList.toggle('hide',x!==t);$('t-'+x).classList.toggle('on',x===t)});render()}
function cambiaD(id,v){const j=S.jug.find(x=>x.id===id);j.d=v.trim();S.jug.sort(ord);save();render()}
function addP(){const d=$('dorsal').value.trim(),n=$('nombre').value.trim();if(!n)return;S.jug.push({id:Date.now(),d,n});S.jug.sort(ord);$('dorsal').value=$('nombre').value='';save();render();$('dorsal').focus()}
function delP(id){confirmar(L.confDelP,()=>{S.jug=S.jug.filter(j=>j.id!==id);S.pista=S.pista.filter(x=>x!==id);S.ev=S.ev.filter(e=>e.p!==id);S.redo=(S.redo||[]).filter(e=>e.p!==id);save();render()})}
function fotoP(id){fsel=id;$('finput').value='';$('finput').click()}
function cargaFoto(inp){const file=inp.files[0];if(!file)return;const img=new Image();img.onload=()=>{const z=140,c=document.createElement('canvas');c.width=c.height=z;const s=Math.min(img.width,img.height);c.getContext('2d').drawImage(img,(img.width-s)/2,(img.height-s)/2,s,s,0,0,z,z);const j=S.jug.find(x=>x.id===fsel);if(j){j.f=c.toDataURL('image/jpeg',0.7);save();render();$('plmsg').textContent=L.photoSet}URL.revokeObjectURL(img.src)};img.src=URL.createObjectURL(file)}
async function guardarPl(){$('plmsg').textContent=L.savingD;const ok=await persistir();$('plmsg').textContent=ok?L.plSaved:L.localOnly}
function act(k){if(cambio){flash(L.endSubsFirst);return}if(!cur||!S.pista.includes(cur)){flash(L.pickPlayer);return}S.ev.push({p:cur,k,q:S.q});S.redo=[];{const pn={'T2+':2,'T3+':3,'TL+':1}[k];if(pn){const id=cur;setTimeout(()=>fx(id,pn),0)}}save();render();toast(cur,k);if(k==='FA'&&st(S.ev,cur).FA===5)flash(L.foul5(S.jug.find(j=>j.id===cur).n));if(k==='FA'&&tFal()===4)flash(L.bonus)}
const isR=e=>e.p===0&&/^R[123]$/.test(e.k);
const rivP=ev=>ev.filter(isR).reduce((a,e)=>a+ +e.k[1],0);
function syncRp(){if(S.ev.some(isR))S.rp=String(rivP(S.ev))}
function rivPt(n){S.ev.push({p:0,k:'R'+n,q:S.q});S.redo=[];syncRp();save();render();toast(0,'R'+n);setTimeout(()=>fx(0,n,$('rvb')),0)}
function rivQuita(){let i=-1;for(let k=S.ev.length-1;k>=0;k--)if(isR(S.ev[k])){i=k;break}if(i<0)return;const e=S.ev.splice(i,1)[0];S.rp=S.ev.some(isR)?String(rivP(S.ev)):'';save();render();flash(`${S.rival||L.noRival} −${e.k[1]}`)}
let RG=null,rtN=0,rtT=null;
function rivGestos(){const z=$('marc');if(!z)return;
z.addEventListener('pointerdown',e=>{const b=e.target.closest('#rvb');RG=b?{x:e.clientX,y:e.clientY,p:e.pointerId,el:b}:null});
z.addEventListener('pointermove',e=>{if(!RG||e.pointerId!==RG.p)return;const dy=e.clientY-RG.y;if(Math.abs(dy)>4){RG.el.style.transition='none';RG.el.style.transform=`translateY(${Math.max(-10,Math.min(50,dy))}px)`;RG.el.classList.toggle('gdel',dy>=45)}});
const fin=e=>{if(!RG||e.pointerId!==RG.p){RG=null;return}const dx=e.clientX-RG.x,dy=e.clientY-RG.y,el=RG.el;RG=null;el.style.transition='transform .25s cubic-bezier(.3,1.4,.5,1)';el.style.transform='';el.classList.remove('gdel');
if(e.type==='pointercancel')return;if(dy>=45&&dy>Math.abs(dx)*1.5){rtN=0;clearTimeout(rtT);rivQuita();return}if(Math.hypot(dx,dy)>12)return;
rtN++;clearTimeout(rtT);rtT=setTimeout(()=>{const n=Math.min(rtN,3);rtN=0;rivPt(n)},330)};
z.addEventListener('pointerup',fin);z.addEventListener('pointercancel',fin)}
function marcador(P){const R=rivP(S.ev),rn=esc(S.rival||L.noRival),btn=`<small class="rhint">${L.rivHint}</small>`;
const us=`<div class="sbt us"><span>${esc(TEAM)}</span><b>${P}</b></div>`,them=`<div class="sbt rv" id="rvb"><span>${rn}</span><b>${R}</b>${btn}</div>`,
dash='<div class="sbd">–</div>';return S.loc==='V'?them+dash+us:us+dash+them}
const tFal=()=>S.ev.filter(e=>e.k==='FA'&&(S.q>=4?e.q>=4:e.q===S.q)).length;
const tmLeft=()=>{const h=S.q<=2?[1,2]:S.q<=4?[3,4]:[5],mx=S.q<=2?2:S.q<=4?3:1;return Math.max(0,mx-S.ev.filter(e=>e.k==='TM'&&h.includes(e.q)).length)};
function tiempoMuerto(){if(!tmLeft())return;S.ev.push({p:0,k:'TM',q:S.q});S.redo=[];save();render();toast(0,'TM')}
let toastT=null;
function toast(id,k){let t=$('toastb');if(!t){t=document.createElement('div');t.id='toastb';document.body.appendChild(t)}const j=S.jug.find(x=>x.id===id);const sn=j?(j.d!==''?'#'+j.d+' ':'')+String(j.n).split(' ')[0]:'';
t.innerHTML=`<span>${k==='TM'?L.tmLog:/^R[123]$/.test(k)?esc(S.rival||L.noRival)+' +'+k[1]:esc(sn)+' · '+(L.ev[k]||k)}</span><button onclick="undo();$('toastb').classList.remove('on')">${L.undo}</button>`;t.classList.add('on');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('on'),3500)}
let WL=null;
async function wakeOn(){const want=curTab==='partido'&&S.view==='play'&&document.visibilityState==='visible';try{if(want&&!WL&&navigator.wakeLock){WL=await navigator.wakeLock.request('screen');WL.addEventListener('release',()=>{WL=null})}else if(!want&&WL){await WL.release();WL=null}}catch(e){WL=null}}
document.addEventListener('visibilitychange',()=>{WL=null;wakeOn()});
function undo(){const e=S.ev.pop();if(e)(S.redo=S.redo||[]).push(e);if(e&&isR(e))S.rp=S.ev.some(isR)?String(rivP(S.ev)):'';save();render()}
function redo(){const r=S.redo||[];if(!r.length)return;const e=r.pop();S.ev.push(e);if(isR(e))syncRp();save();render();if(e.k==='FA'&&st(S.ev,e.p).FA===5){const j=S.jug.find(x=>x.id===e.p);if(j)flash(L.foul5(j.n))}}
let swallowT=0,G=null;
function gestos(){const z=$('sel');if(!z)return;
z.addEventListener('pointerdown',e=>{if(cambio||e.pointerType==='mouse'&&e.button!==0){G=null;return}const b=e.target.closest('button[data-id]');G=b?{id:+b.dataset.id,x:e.clientX,y:e.clientY,p:e.pointerId,el:b}:null});
const dirK=(dx,dy)=>{const ax=Math.abs(dx),ay=Math.abs(dy);if(ay>=45&&ay>ax*1.5)return dy>0?'FA':'RE';if(ax>=45&&ax>ay*1.5)return dx>0?'AS':'RB';return null};
z.addEventListener('pointermove',e=>{if(!G||e.pointerId!==G.p)return;const dx=e.clientX-G.x,dy=e.clientY-G.y,el=G.el;const ax=Math.abs(dx),ay=Math.abs(dy);if(Math.max(ax,ay)>4){const c=v=>Math.max(-70,Math.min(70,v));el.style.transition='none';el.style.position='relative';el.style.zIndex=5;el.style.transform=ay>=ax?`translateY(${c(dy)}px)`:`translateX(${c(dx)}px)`;const k=dirK(dx,dy);el.classList.remove('gFA','gRE','gAS','gRB');if(k)el.classList.add('g'+k)}});
const suelta=el=>{if(!el)return;el.style.transition='transform .25s cubic-bezier(.3,1.4,.5,1)';el.style.transform='';el.style.zIndex='';el.classList.remove('gFA','gRE','gAS','gRB')};
z.addEventListener('pointerup',e=>{if(!G||e.pointerId!==G.p){G=null;return}const dx=e.clientX-G.x,dy=e.clientY-G.y,id=G.id;suelta(G.el);G=null;if(cambio)return;
const k=dirK(dx,dy);if(k){anulaToques();gesto(id,k)}else if(Math.hypot(dx,dy)>12){anulaToques()}});
z.addEventListener('pointercancel',()=>{if(G){suelta(G.el);G=null;anulaToques()}})}
function anulaToques(){swallowT=Date.now();clearTimeout(tapT);tapN=0;tapId=null}
function falta(id){gesto(id,'FA')}
function gesto(id,k){if(!S.pista.includes(id))return;cur=id;act(k);const b=document.querySelector(`#sel button[data-id="${id}"]`);if(!b)return;const r=b.getBoundingClientRect();const d=document.createElement('div');d.className='fx fxf fx'+k;d.textContent=L.gFx[k];d.style.left=(r.left+r.width/2)+'px';d.style.top=(r.top+r.height/2)+'px';document.body.appendChild(d);setTimeout(()=>d.remove(),2500);try{navigator.vibrate&&navigator.vibrate(25)}catch(x){}}
function flash(t){$('log').innerHTML='<div class="warn">'+esc(t)+'</div>'+$('log').innerHTML}
function st(ev,id){const s={};KEYS.forEach(k=>s[k]=0);ev.filter(e=>id==null||e.p===id).forEach(e=>{if(e.k in s)s[e.k]++});s.PTS=s['T2+']*2+s['T3+']*3+s['TL+'];s.REB=s.RE+s.RO+s.RD;return s}
const pct=(a,b)=>a+b?Math.round(a*100/(a+b))+'%':'-';
const tiro=(s,k)=>{const m=s[k+'+'],f=s[k+'-'];return`${m}/${m+f} ${pct(m,f)}`};
const fila=(n,s)=>[n,s.PTS,tiro(s,'T2'),tiro(s,'T3'),tiro(s,'TL'),s.REB,s.AS,s.RB,s.TP,s.FA];
const head=ks=>ks.map(k=>L.cols[k]);
function pinta(el,ks,rows,ph){
el.innerHTML='<tr>'+ks.map(k=>VERT.includes(k)?`<th class="v">${L.cols[k]}</th>`:`<th>${SHORT[k]||L.cols[k]}</th>`).join('')+'</tr>'+rows.map((r,i)=>'<tr>'+r.map((c,ci)=>i===rows.length-1?`<td><b>${esc(c)}</b></td>`:`<td>${ci===0&&ph[i]?tav(ph[i]):''}${esc(c)}</td>`).join('')+'</tr>').join('')}
const VERT=['REB','AS','RB','TP','FA'];
const SHORT={PJ:'PJ',PTS:'PTS',T2:'T2',T3:'T3',TL:'TL'};
const KM=['J','PTS','T2','T3','TL','REB','AS','RB','TP','FA'];
function tablaDe(jug,ev,el){const ph=jug.map(actual);const rows=ph.map(j=>fila(dn(j),st(ev,j.id)));rows.push(fila(L.total,st(ev,null)));pinta(el,KM,rows,ph);return[head(KM),...rows]}
function render(){
$('lista').innerHTML=S.jug.map(j=>`<div><input type="number" inputmode="numeric" placeholder="${L.num}" value="${esc(j.d)}" style="width:64px;padding:8px" onchange="cambiaD(${j.id},this.value)"><span class="info plnm">${esc(j.n)}</span><button onclick="delP(${j.id})">✕</button></div>`).join('')||`<p style="color:#888">${L.addHint}</p>`;
const ae=document.activeElement;if(ae!==$('rival'))$('rival').value=S.rival||'';$('fecha').value=S.fecha||'';if(ae!==$('rp'))$('rp').value=S.rp||'';
$('sel').innerHTML=S.jug.filter(j=>S.pista.includes(j.id)).map(j=>{const f=st(S.ev,j.id).FA;return`<button class="${cambio?(OUT.includes(j.id)?'sel':''):(cur===j.id?'on':'')}" data-id="${j.id}" onclick="tocaPista(${j.id})">${j.f?av(j):jer(j.d)}${nm2(j)}${f?` <span class="${f>=5?'warn':''}">F${f}</span>`:''}</button>`}).join('');
$('cuartos').innerHTML=[1,2,3,4,5].map(q=>`<button class="${S.q===q?'on':''}" onclick="S.q=${q};save();render()">${qn(q)}</button>`).join('');
const P=st(S.ev,null).PTS;$('marc').innerHTML=marcador(P);{const r=$('bRedo');if(r)r.disabled=!(S.redo&&S.redo.length)}$('bL').classList.toggle('on',S.loc!=='V');$('bV').classList.toggle('on',S.loc==='V');$('pcfg').classList.toggle('hide',S.view==='play');$('pplay').classList.toggle('hide',S.view!=='play');{const tf=tFal();const e=$('tfal');if(e){e.innerHTML=L.tFouls(tf);e.className=tf>=4?'bonus':''}const b=$('bTM');if(b){const n=tmLeft();b.textContent=n?L.tmBtn(n):L.tmNone;b.disabled=!n}}document.body.classList.toggle('playing',curTab==='partido'&&S.view==='play');wakeOn();prevM();
$('log').innerHTML=S.ev.slice(-15).reverse().map(e=>{if(e.k==='TM')return`<div>${qn(e.q)} · ${L.tmLog}</div>`;if(isR(e))return`<div>${qn(e.q)} · ${esc(S.rival||L.noRival)} +${e.k[1]}</div>`;const j=S.jug.find(x=>x.id===e.p);return`<div>${qn(e.q)} · ${j?esc(dn(j)):'?'} — ${L.ev[e.k]||e.k}</div>`}).join('');
$('titRes').textContent=`${vsT(S,S.rival||L.noRival)} · ${fmtF(S.fecha)} · ${rsT(S,P,S.rp)}`;
window._rows=tablaDe([...S.jug].sort((a,b)=>st(S.ev,b.id).PTS-st(S.ev,a.id).PTS||ord(a,b)),S.ev,$('tabla'));renderPista();renderTemp();
$('hlist').innerHTML=H.length?H.map(m=>{const a=st(m.ev,null).PTS,b=m.rp;const c=b===''?'':(a>b?'win':a<b?'lose':'');return`<div onclick="verH(${m.id})"><span class="info"><b>${esc(vsT(m,m.rival||L.noRival))}</b><br><small>${fmtF(m.fecha)} · ${m.loc==='V'?L.away:L.home}</small></span><span class="${c}"><b>${rsT(m,a,b)}</b></span></div>`}).join(''):`<p style="color:#888">${L.noMatchesH}</p>`;
if(hSel)verH(hSel)}
function modoCambio(){cambio=!cambio;OUT=[];IN=[];render()}
const tg=(a,id)=>{const i=a.indexOf(id);i<0?a.push(id):a.splice(i,1)};
let tapN=0,tapT=null,tapId=null;
function tocaPista(id){if(cambio){tg(OUT,id);render();return}if(Date.now()-swallowT<350)return;
if(tapId!==id)tapN=0;tapId=id;tapN++;clearTimeout(tapT);if(tapN===1){cur=id;render()}
tapT=setTimeout(()=>{const n=tapN;tapN=0;tapId=null;if(n===2)anota(id,'T2+',2);else if(n>=3)anota(id,'T3+',3)},330)}
function anota(id,k,n){cur=id;act(k)}
function fx(id,n,b0){const b=b0||document.querySelector(`#sel button[data-id="${id}"]`);if(!b)return;const r=b.getBoundingClientRect();
const d=document.createElement('div');d.className='fx'+(n===3?' fx3':'');d.innerHTML=n===3?'<svg width="50" height="48" viewBox="2 0 70 68" style="filter:drop-shadow(0 0 10px rgba(215,20,26,.9))"><g fill="#fff" stroke="#c4121a" stroke-width="1.6"><rect x="22.5" y="3" width="9" height="34" rx="4.5" transform="rotate(-38 27 37)"/><rect x="31.5" y="1" width="9.5" height="36" rx="4.75" transform="rotate(-16 36 37)"/><rect x="47" y="24" width="10" height="27" rx="5" transform="rotate(35 52 49)"/><rect x="20" y="30" width="34" height="34" rx="11"/></g><g fill="#fff"><circle cx="26.5" cy="35" r="3.6"/><circle cx="35.5" cy="34" r="3.8"/><circle cx="50.5" cy="46" r="3.8"/></g><g fill="#fff" stroke="#c4121a" stroke-width="1.6"><rect x="13" y="43" width="25" height="8.5" rx="4.25"/><rect x="15" y="51.5" width="22" height="8" rx="4"/></g></svg>+3':'+'+n;d.style.left=(r.left+r.width/2)+'px';d.style.top=(r.top+r.height/2)+'px';document.body.appendChild(d);
const p=document.createElement('div');p.className='fxr';p.style.left=d.style.left;p.style.top=d.style.top;document.body.appendChild(p);
b.classList.add('pop');setTimeout(()=>{d.remove();p.remove();const bb=document.querySelector(`#sel button[data-id="${id}"]`);if(bb)bb.classList.remove('pop')},2500);try{navigator.vibrate&&navigator.vibrate(n===3?[30,40,30]:30)}catch(e){}}
function marca(id){if(!S.jugaron.includes(id))S.jugaron.push(id)}
function tocaBanco(id){
if(!OUT.length&&!IN.length&&S.pista.length<5){S.pista.push(id);marca(id);save();render();return}
if(!OUT.length){flash(L.pickOut);return}tg(IN,id);if(IN.length===OUT.length){hacerCambios();return}render()}
function bancoOrd(){const b=S.jug.filter(j=>!S.pista.includes(j.id));const o=S.bOrd||[];return b.sort((x,y)=>{const a=o.indexOf(x.id),c=o.indexOf(y.id);return(a<0?999:a)-(c<0?999:c)||ord(x,y)})}
function hacerCambios(){S.bOrd=bancoOrd().map(j=>j.id);if(!OUT.length||OUT.length!==IN.length){flash(L.pickEq);return}
const R=q=>{const e=document.querySelector(q);return e?e.getBoundingClientRect():null};
const prs=OUT.map((o,k)=>({o,n:IN[k],oR:R(`#sel button[data-id="${o}"]`),iR:R(`#banco button[data-id="${IN[k]}"]`)}));
setTimeout(()=>prs.forEach(p=>{
const fl=(el,from,ex)=>{if(!el||!from)return;const to=el.getBoundingClientRect();try{el.animate([{transform:`translate(${from.left-to.left}px,${from.top-to.top}px)`,zIndex:5,...ex[0]},{transform:'none',...ex[1]}],{duration:750,easing:'cubic-bezier(.3,.9,.3,1.1)'})}catch(e){}};
fl(document.querySelector(`#sel button[data-id="${p.n}"]`),p.iR,[{boxShadow:'0 0 0 3px #34c759, 0 10px 30px rgba(52,199,89,.6)'},{boxShadow:'0 0 0 0 transparent'}]);
fl(document.querySelector(`#banco button[data-id="${p.o}"]`),p.oR,[{opacity:1,boxShadow:'0 0 0 3px #ff453a'},{opacity:.75,boxShadow:'0 0 0 0 transparent'}]);
}),0);
OUT.forEach((o,k)=>{const n=IN[k],i=S.pista.indexOf(o),sale=S.jug.find(j=>j.id===o),entra=S.jug.find(j=>j.id===n);S.pista[i]=n;marca(n);{const bi=S.bOrd.indexOf(n);if(bi>=0)S.bOrd[bi]=o;else S.bOrd.push(o)}if(cur===o)cur=null;flash(`🔄 ${qn(S.q)} · ${L.subIn} ${dn(entra)} · ${L.subOut} ${dn(sale)}`)});
OUT=[];IN=[];save();render()}
function quitarPista(){if(OUT.length){S.pista=S.pista.filter(x=>!OUT.includes(x));if(OUT.includes(cur))cur=null;OUT=[];IN=[];save();render()}}
function renderPista(){const n=S.pista.length;
$('lblPista').textContent=n<5?L.onCourtN(n):L.onCourt;
const b=$('bCambio');b.textContent=cambio?L.endSubs:L.subs;b.classList.toggle('on',cambio);
$('zonaBanco').classList.toggle('hide',!cambio);
$('banco').innerHTML=bancoOrd().map(j=>`<button data-id="${j.id}" class="${IN.includes(j.id)?'sel':''}" onclick="tocaBanco(${j.id})">${j.f?av(j):jer(j.d)}${nm2(j)}</button>`).join('')+(OUT.length&&!IN.length?`<button class="ko" style="grid-column:1/-1;opacity:1;height:auto!important;padding:10px!important;justify-content:center!important" onclick="quitarPista()">${L.benchOut}</button>`:'')}
let TF={loc:'',riv:'',n:0},FID=null;
function filtH(){let a=H.filter(m=>(!TF.loc||(m.loc||'L')===TF.loc)&&(!TF.riv||m.rival.trim()===TF.riv));if(TF.n)a=a.slice(0,TF.n);return a}
function renderTemp(){
const o=(v,t,sel)=>`<option value="${esc(v)}"${String(sel)===String(v)?' selected':''}>${esc(t)}</option>`;
const rivs=[...new Set(H.map(m=>m.rival.trim()))].sort();if(TF.riv&&!rivs.includes(TF.riv))TF.riv='';
$('fLoc').innerHTML=o('',L.fAll,TF.loc)+o('L',L.fHome,TF.loc)+o('V',L.fAway,TF.loc);
$('fRiv').innerHTML=o('',L.fRivAll,TF.riv)+rivs.map(r=>o(r,r,TF.riv)).join('');
$('fN').innerHTML=o(0,L.fNAll,TF.n)+[3,5,10].map(n=>o(n,L.fLast(n),TF.n)).join('');
const HF=filtH();
const pj=HF.length;let w=0,l=0;HF.forEach(m=>{if(m.rp===''||m.rp==null)return;const a=st(m.ev,null).PTS;if(a>m.rp)w++;else if(a<m.rp)l++});
$('tresumen').innerHTML=pj?`${pj} ${L.matches} · <span class="win">${w} ${L.W}</span> · <span class="lose">${l} ${L.L}</span>`:`<span style="font-size:14px;color:#888">${L.noMatches}</span>`;
const map={};HF.forEach(m=>{const jug=m.jugaron||[...new Set(m.ev.map(e=>e.p))];m.jug.forEach(j=>{const a=actual(j);if(!map[j.id])map[j.id]={id:j.id,d:a.d,n:a.n,f:a.f,pj:0,ev:[]};if(jug.includes(j.id))map[j.id].pj++;m.ev.filter(e=>e.p===j.id).forEach(e=>map[j.id].ev.push(e))})});
const Lp=Object.values(map).filter(p=>p.pj).sort(ord);
const KT=['J','PJ',...KM.slice(1)];
const tot=Lp.map(p=>{const r=fila(dn(p),st(p.ev,null));r.splice(1,0,p.pj);return r});
const all=[];HF.forEach(m=>all.push(...m.ev));const Tt=fila(L.team,st(all,null));Tt.splice(1,0,pj);tot.push(Tt);
const avg=(v,n)=>n?(v/n).toFixed(1):'-';
const md=(nm,n,s)=>[nm,n,avg(s.PTS,n),avg(s.REB,n),avg(s.AS,n),avg(s.RB,n),avg(s.TP,n),avg(s.FA,n)];
const med=Lp.map(p=>md(dn(p),p.pj,st(p.ev,null)));med.push(md(L.team,pj,st(all,null)));
const KA=['J','PJ','PTS','REB','AS','RB','TP','FA'];
pinta($('ttot'),KT,tot,Lp);pinta($('tmed'),KA,med,Lp);['ttot','tmed'].forEach(t=>[...$(t).rows].slice(1,Lp.length+1).forEach((r,i)=>{r.classList.add('clk');r.onclick=()=>ficha(Lp[i].id)}));if(FID)ficha(FID,1);
window._trows=[[L.totals],head(KT),...tot,[],[L.avgs],head(KA),...med]}
function cerrarFicha(){FID=null;$('ficha').classList.add('hide');$('tmain').classList.remove('hide');scrollTo(0,0)}
function datosJ(id){return filtH().slice().reverse().filter(m=>(m.jugaron||[]).includes(id)||m.ev.some(e=>e.p===id)).map(m=>({m,s:st(m.ev,id)}))}
function barras(vals,labs,fmt){const W=360,Hh=90,n=vals.length||1,bw=Math.min(36,(W-20)/n-6),mx=Math.max(1,...vals.filter(v=>v!=null));
return`<svg viewBox="0 -20 ${W} ${Hh+48}" class="chart">${vals.map((v,i)=>{const x=10+i*((W-20)/n)+((W-20)/n-bw)/2,h=v==null?0:Math.max(2,(v/mx)*Hh),y=Hh-h+4;return`<rect x="${x}" y="${y}" width="${bw}" height="${h}" rx="5" fill="${v==null?'#444':'#d7141a'}"/><text x="${x+bw/2}" y="${y-4}" text-anchor="middle" fill="#fff" font-size="11" font-weight="700">${v==null?'–':fmt(v)}</text><text x="${x+bw/2}" y="${Hh+20}" text-anchor="middle" fill="#999" font-size="9">${esc(labs[i])}</text>`}).join('')}</svg>`}
function ficha(id,ns){FID=id;const j=S.jug.find(x=>x.id===id)||H.flatMap(m=>m.jug).find(x=>x.id===id);if(!j)return;
const D=datosJ(id),pj=D.length,T={};KEYS.forEach(k=>T[k]=0);T.PTS=0;T.REB=0;D.forEach(d=>{for(const k in d.s)T[k]=(T[k]||0)+d.s[k]});
const av=v=>pj?(v/pj).toFixed(1):'-',pc=k=>{const m=T[k+'+'],t=m+T[k+'-'];return t?Math.round(m*100/t)+'%':'-'};
const lab=d=>String(d.m.rival).trim().slice(0,7),fg=s=>{const m=s['T2+']+s['T3+'],t=m+s['T2-']+s['T3-'];return t?Math.round(m*100/t):null};
$('tmain').classList.add('hide');const z=$('ficha');z.classList.remove('hide');
z.innerHTML=`<button onclick="cerrarFicha()" style="margin-bottom:10px">${L.back}</button>
<div class="fhd">${j.f?`<img class="fav" src="${j.f}">`:jer(j.d)}<div><div class="fnm">${esc(j.n)}</div><div class="lbl">${j.d!==''?'#'+esc(j.d)+' · ':''}${pj} ${L.matches}</div></div></div>
<div class="fch">${[['PTS',av(T.PTS)],['REB',av(T.REB)],['AST',av(T.AS)],['REC',av(T.RB)]].map(([a,b])=>`<div><b>${b}</b><span>${a} / ${L.pg}</span></div>`).join('')}</div>
<div class="fch f3">${['T2','T3','TL'].map(k=>`<div><b>${pc(k)}</b><span>${k} · ${T[k+'+']}/${T[k+'+']+T[k+'-']}</span></div>`).join('')}</div>
<h2>${L.cPts}</h2>${pj?barras(D.map(d=>d.s.PTS),D.map(lab),v=>v):`<p class="lbl">${L.noMatches}</p>`}
<h2>${L.cFg}</h2>${pj?barras(D.map(d=>fg(d.s)),D.map(lab),v=>v+'%'):''}
<h2>${L.byMatch}</h2><div class="tw"><table><tr><th>${L.dateL.split(' ')[0]}</th><th>Rival</th><th>PTS</th><th>T2</th><th>T3</th><th>TL</th><th>REB</th><th>AST</th><th>REC</th><th>TAP</th><th>FAL</th></tr>${D.slice().reverse().map(d=>`<tr><td>${fmtF(d.m.fecha).slice(0,5)}</td><td>${esc(String(d.m.rival).trim())}</td><td><b>${d.s.PTS}</b></td><td>${d.s['T2+']}/${d.s['T2+']+d.s['T2-']}</td><td>${d.s['T3+']}/${d.s['T3+']+d.s['T3-']}</td><td>${d.s['TL+']}/${d.s['TL+']+d.s['TL-']}</td><td>${d.s.REB}</td><td>${d.s.AS}</td><td>${d.s.RB}</td><td>${d.s.TP}</td><td>${d.s.FA}</td></tr>`).join('')}</table></div>
<button class="on" style="width:100%;margin-top:12px" onclick="compartirJ(${id})">${L.shareJ}</button>`;if(!ns)scrollTo(0,0)}
function compartirJ(id){const j=S.jug.find(x=>x.id===id)||H.flatMap(m=>m.jug).find(x=>x.id===id);if(!j)return;const D=datosJ(id),pj=D.length,T={};KEYS.forEach(k=>T[k]=0);T.PTS=0;T.REB=0;D.forEach(d=>{for(const k in d.s)T[k]=(T[k]||0)+d.s[k]});
const av=v=>pj?(v/pj).toFixed(1):'-',pc=k=>{const m=T[k+'+'],t=m+T[k+'-'];return t?Math.round(m*100/t)+'%':'-'};const best=D.reduce((a,d)=>d.s.PTS>(a?a.s.PTS:-1)?d:a,null);
window.SHM={rival:j.n,fecha:hoy()};SHB=null;
$('share').innerHTML=`<style>#share{background:radial-gradient(120% 60% at 50% 0%,#5c0a0f 0%,#1a0507 55%,#070707 100%);display:flex;flex-direction:column;align-items:center;padding:0}
#share .sw{width:100%;display:flex;justify-content:center;padding:8px 6px 0;overflow:hidden}
#share .k{width:380px;flex:none;transform-origin:top center;border-radius:22px;padding:18px 14px;color:#fff;background:linear-gradient(165deg,#dc161c,#8c0a10 34%,#1c0608 72%);border:1px solid rgba(255,255,255,.25);display:flex;flex-direction:column;gap:12px;font-family:'Barlow Condensed',system-ui,sans-serif}
#share .k.cap{padding-top:60px!important;padding-bottom:26px!important}
#share .jh{display:flex;align-items:center;gap:12px}#share .jh img.fav,#share .jh .jer{width:64px;height:64px;border-radius:50%;object-fit:cover;flex:none}
#share .jn{font-size:30px;font-weight:800;text-transform:uppercase;line-height:1}#share .js{font:600 12px system-ui;letter-spacing:2px;text-transform:uppercase;opacity:.85;margin-top:4px}
#share .jg{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}#share .jg.g3{grid-template-columns:repeat(3,1fr)}
#share .jg div{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);border-radius:12px;padding:8px 4px;text-align:center}
#share .jg b{display:block;font-size:30px;font-weight:800;line-height:1}#share .jg span{display:block;font:600 9px system-ui;letter-spacing:1px;text-transform:uppercase;opacity:.8;margin-top:3px}
#share .jt{font:700 11px system-ui;letter-spacing:2px;text-transform:uppercase;opacity:.85}#share .chart{width:100%;height:auto;display:block;background:rgba(0,0,0,.25);border-radius:12px;padding:6px 0}
#share .jbest{font:600 13px system-ui;text-align:center;background:rgba(0,0,0,.25);border-radius:12px;padding:8px}
#share .shb2{position:fixed;left:0;right:0;bottom:0;display:flex;gap:8px;padding:10px;background:rgba(10,10,10,.6);backdrop-filter:blur(12px)}#share .shb2 button{flex:1;border-radius:12px;font-size:14px}
#wamsg{position:fixed;bottom:64px;left:0;right:0;text-align:center}</style>
<div class="sw"><div class="k" id="kard"><div class="jt" style="text-align:center">Sant Pere Bàsquet · ${L.cat}</div>
<div class="jh">${j.f?`<img class="fav" src="${j.f}">`:jer(j.d)}<div><div class="jn">${esc(j.n)}</div><div class="js">${j.f&&j.d!==''?'#'+esc(j.d)+' · ':''}${pj} ${L.matches}</div></div></div>
<div class="jt">${L.avgs}</div><div class="jg">${[['PTS',av(T.PTS)],['REB',av(T.REB)],['AST',av(T.AS)],['REC',av(T.RB)]].map(([a,b])=>`<div><b>${b}</b><span>${a}</span></div>`).join('')}</div>
<div class="jg g3">${['T2','T3','TL'].map(k=>`<div><b>${pc(k)}</b><span>${k} ${T[k+'+']}/${T[k+'+']+T[k+'-']}</span></div>`).join('')}</div>
<div class="jt">${L.cPts}</div>${barras(D.map(d=>d.s.PTS),D.map(d=>String(d.m.rival).trim().slice(0,7)),v=>v)}
</div></div>
<p id="wamsg" class="msg"></p><div class="shb2"><button class="on" onclick="shareImg()">${L.shareImg}</button><button onclick="$('share').classList.add('hide')" style="flex:none;width:56px">✕</button></div>`;
$('share').classList.remove('hide');$('share').scrollTop=0;
const fit=()=>{const k=$('kard');if(!k)return;k.style.transform='';const sc=Math.min(1,(innerWidth-12)/380,(innerHeight-84)/k.offsetHeight);k.style.transform=`scale(${sc})`;k.parentNode.style.height=(k.offsetHeight*sc+8)+'px'};fit();setTimeout(fit,60);onresize=fit;setTimeout(()=>{SHB=genImg().catch(()=>null)},400)}
let EDIT=false;
const EKEYS=['T2+','T2-','T3+','T3-','TL+','TL-','RE','AS','RB','TP','FA'];
function editH(){EDIT=!EDIT;verH(hSel)}
function renderEdit(m){const z=$('hedit');if(!z)return;$('bEdit').textContent=EDIT?L.editDone:L.editBtn;if(!EDIT){z.innerHTML='';return}
const js=m.jug.map(actual);const opt=(v,o)=>o.map(([a,b])=>`<option value="${a}"${String(a)===String(v)?' selected':''}>${esc(b)}</option>`).join('');
const qs=[1,2,3,4,5].map(q=>[q,qn(q)]),ps=js.map(j=>[j.id,dn(j)]),ks=EKEYS.map(k=>[k,L.ev[k]]);
z.innerHTML=`<p class="lbl">${L.editHint}</p><button style="width:100%;margin:6px 0" onclick="addEv()">${L.addAct}</button>`+m.ev.map((e,i)=>e.k==='TM'||isR(e)?'':`<div class="er"><select onchange="setEv(${i},'q',+this.value)">${opt(e.q,qs)}</select><select onchange="setEv(${i},'p',+this.value)">${opt(e.p,ps)}</select><select onchange="setEv(${i},'k',this.value)">${opt(e.k,EKEYS.includes(e.k)?ks:[...ks,[e.k,L.ev[e.k]||e.k]])}</select><button class="ko" onclick="delEv(${i})">✕</button></div>`).reverse().join('')}
async function guardaEd(){await persistir();const y=scrollY;verH(hSel);scrollTo(0,y)}
function setEv(i,f,v){const m=H.find(x=>x.id===hSel);if(!m)return;m.ev[i][f]=v;if(f==='p'){m.jugaron=m.jugaron||[];if(!m.jugaron.includes(v))m.jugaron.push(v)}guardaEd()}
function delEv(i){confirmar(L.delAct,()=>{const m=H.find(x=>x.id===hSel);if(!m)return;m.ev.splice(i,1);guardaEd()})}
function addEv(){const m=H.find(x=>x.id===hSel);if(!m||!m.jug.length)return;const p=m.jug[0].id;m.ev.push({p,k:'T2+',q:4});m.jugaron=m.jugaron||[];if(!m.jugaron.includes(p))m.jugaron.push(p);guardaEd()}
function verH(id){if(id!==hSel)EDIT=false;hSel=id;const m=H.find(x=>x.id===id);$('hlist').classList.toggle('hide',!!m);document.querySelector('.tabs').classList.toggle('hide',!!m);$('bkbox').classList.toggle('hide',!!m);$('hdet').classList.toggle('hide',!m);if(!m){hSel=null;return}
const a=st(m.ev,null).PTS,b=m.rp,c=b===''||b==null?'':(a>b?'win':a<b?'lose':'');
const nob=b===''||b==null,bd=nob?'':(a>b?['bw',L.win]:a<b?['bl',L.loss]:['bd',L.draw]);
$('hhead').innerHTML=`<style>.mb{background:linear-gradient(135deg,#d7141a,#7a0b0f);border:2px solid #fff;border-radius:14px;padding:12px 8px;text-align:center;margin-bottom:12px;color:#fff}.mbd{font-size:12px;opacity:.85;margin-bottom:6px}.mbr{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:6px}.mbt{font-weight:800;font-size:15px;text-transform:uppercase;line-height:1.15;word-break:break-word}.mbs{font-size:42px;font-weight:900;white-space:nowrap}.mbs span{opacity:.6;margin:0 4px}.mb .badge{margin-top:8px}</style><div class="mb"><div class="mbd">${fmtF(m.fecha)} · <span onclick="locH(m2loc())" style="text-decoration:underline dotted;cursor:pointer">${m.loc==='V'?L.away:L.home} ⇄</span></div>${(()=>{const V=m.loc==='V',n1=V?esc(m.rival||L.noRival):TEAM,n2=V?TEAM:esc(m.rival||L.noRival),s1=V?(nob?'?':b):a,s2=V?a:(nob?'?':b);return`<div class="mbr"><div class="mbt">${n1}</div><div class="mbs">${(()=>{const oc='#fff',o=x=>`<em style="font-style:normal;color:${oc}">${x}</em>`;return V?`${s1}<span>-</span>${o(s2)}`:`${o(s1)}<span>-</span>${s2}`})()}</div><div class="mbt">${n2}</div></div>`})()}${bd?`<span class="badge ${bd[0]}">${bd[1]}</span>`:''}</div>${nob?`<div class="row" style="align-items:center"><span style="flex:1">${L.rivalPts}</span><input type="number" inputmode="numeric" style="width:90px" id="hrp"><button onclick="guardaRP()">OK</button></div>`:''}`;
{const r=document.querySelector('#hhead .mbr');if(r){let x0=null;r.style.touchAction='pan-y';r.onpointerdown=e=>{x0=e.clientX};r.onpointerup=e=>{if(x0!=null&&Math.abs(e.clientX-x0)>50)locH(m2loc());x0=null}}}
renderEdit(m);window._hrows=tablaDe([...m.jug].sort((a,b)=>st(m.ev,b.id).PTS-st(m.ev,a.id).PTS||ord(actual(a),actual(b))),m.ev,$('htabla'))}
async function persistir(){try{await DB.set('H',cl(H));await DB.set('S',cl(S));return true}catch(e){return false}}
function guardar(){
if(!S.ev.length){$('msg').textContent=L.nothing;return}
if(!S.rival){tab('partido');$('rival').focus();flash(L.needRival);return}
confirmar(L.confSave(S.rival),async()=>{
H.unshift({id:Date.now(),rival:S.rival,fecha:S.fecha,rp:S.rp===''?'':+S.rp,loc:S.loc||'L',jug:S.jug.map(({f,...j})=>j),ev:S.ev,jugaron:[...new Set([...S.jugaron,...S.ev.map(e=>e.p).filter(Boolean)])]});
S.ev=[];S.redo=[];S.pista=[];S.jugaron=[];cambio=false;S.q=1;S.rival='';S.rp='';S.fecha=hoy();S.loc='L';S.view='cfg';cur=null;save();
$('msg').textContent=L.savingD;const ok=await persistir();tab('historial');
if(!ok)$('hlist').insertAdjacentHTML('afterbegin',`<p class="msg">${L.localOnly}</p>`);setTimeout(()=>confirmar(L.askBk,exportar),300)})}
function m2loc(){const m=H.find(x=>x.id===hSel);return m&&m.loc==='V'?'L':'V'}
async function locH(v){const m=H.find(x=>x.id===hSel);if(!m||m.loc===v)return;m.loc=v;render();$('hmsg').textContent=L.savingD;await persistir();$('hmsg').textContent=L.resSaved}
async function guardaRP(){const m=H.find(x=>x.id===hSel);if(!m)return;const v=$('hrp').value.trim();m.rp=v===''?'':+v;render();$('hmsg').textContent=L.savingD;await persistir();$('hmsg').textContent=L.resSaved}
function borrarH(){confirmar(L.confDelH,async()=>{H=H.filter(m=>m.id!==hSel);verH(null);render();await persistir()})}
function copiar(rows){const t=rows.map(r=>r.join('\t')).join('\n');const ms=[$('msg'),$('hmsg')];navigator.clipboard.writeText(t).then(()=>ms.forEach(m=>m.textContent=L.copied)).catch(()=>ms.forEach(m=>m.textContent=L.copyFail))}
function datos(){const c=cl(S);delete c.jug;return{app:'santpere-stats',schema:1,exportado:new Date().toISOString(),jugadoras:cl(S.jug),partidos:cl(H),enCurso:c,control:{jugadoras:S.jug.length,partidos:H.length,acciones:H.reduce((a,m)=>a+m.ev.length,0),enCurso:S.ev.length}}}
async function exportar(){const d=datos();const t=JSON.stringify(d);const fn=`SantPere_copia_${new Date().toISOString().slice(0,16).replace(/[:T]/g,'-')}.json`;const file=new File([t],fn,{type:'application/json'});
try{if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file]});$('bkmsg').textContent=L.expOk(d.control);return}}catch(e){if(e&&e.name==='AbortError')return}
const a=document.createElement('a');a.href=URL.createObjectURL(file);a.download=fn;document.body.appendChild(a);a.click();a.remove();$('bkmsg').textContent=L.expOk(d.control)}
let impFull=false;function pideImport(f){impFull=!!f;$('bkfile').value='';$('bkfile').click()}
async function importar(inp){const f=inp.files[0];if(!f)return;let d;try{d=JSON.parse(await f.text())}catch(e){$('bkmsg').textContent=L.bkBad;return}
let jug,par,enc=null;if(d&&d.app==='santpere-stats'&&Array.isArray(d.partidos)){jug=d.jugadoras||[];par=d.partidos;enc=d.enCurso||null}else if(d&&d.app==='bk'&&Array.isArray(d.hist)){jug=d.jug||[];par=d.hist}else{$('bkmsg').textContent=L.bkBad;return}
if(impFull){confirmar(L.bkFullConf(par.length,jug.length),async()=>{try{await DB.set('copia_antes_restaurar',{t:Date.now(),S:cl(S),H:cl(H)})}catch(e){$('bkmsg').textContent=L.bkBad;return}
H=cl(par);H.sort((a,b)=>(b.fecha||'').localeCompare(a.fecha||''));const nS={jug:cl(jug),ev:[],q:1,pista:[],jugaron:[],rival:'',fecha:hoy(),rp:'',loc:'L',view:'cfg',redo:[]};if(enc&&typeof enc==='object')Object.assign(nS,cl(enc),{jug:cl(jug)});S=nS;S.jug.sort(ord);cur=null;cambio=S.pista.length<5&&S.jug.length>0;OUT=[];IN=[];hSel=null;
const ok=await persistir();render();$('bkmsg').textContent=ok?L.bkFullOk(H.length,S.jug.length):L.localOnly});return}
confirmar(L.bkConf,async()=>{try{await DB.set('copia_antes_importar',{t:Date.now(),S:cl(S),H:cl(H)})}catch(e){$('bkmsg').textContent=L.bkBad;return}
let np=0,nj=0;par.forEach(m=>{if(!H.some(x=>x.id===m.id)){H.push(m);np++}});H.sort((a,b)=>(b.fecha||'').localeCompare(a.fecha||''));
jug.forEach(p=>{const j=S.jug.find(x=>x.id===p.id);if(!j){S.jug.push(p);nj++}else if(!j.f&&p.f)j.f=p.f});S.jug.sort(ord);
if(enc&&Array.isArray(enc.ev)&&enc.ev.length&&!S.ev.length){Object.assign(S,enc,{jug:S.jug})}
if(!S.view)S.view=S.ev.length?'play':'cfg';
const ok=await persistir();render();$('bkmsg').textContent=ok?L.impOk(np,nj):L.localOnly})}
function compartir(id){
const AB=LANG==='ca'?{AS:'AST',RB:'REC',TP:'TAP',PE:'PÈR',FA:'FAL'}:{AS:'AST',RB:'REC',TP:'TAP',PE:'PÉR',FA:'FAL'};
const m=id?H.find(x=>x.id===id):{rival:S.rival,fecha:S.fecha,loc:S.loc,rp:S.rp===''?'':+S.rp,jug:S.jug,ev:S.ev,jugaron:[...S.jugaron]};if(!m)return;
const jug=m.jug.map(actual),jg=m.jugaron||[];
const ps=jug.map(j=>({j,s:st(m.ev,j.id)})).filter(x=>jg.includes(x.j.id)||m.ev.some(e=>e.p===x.j.id));
ps.sort((a,b)=>b.s.PTS-a.s.PTS||ord(a.j,b.j));
window.SHM=m;const T=st(m.ev,null),a=T.PTS,b=m.rp,hasB=!(b===''||b==null),V=m.loc==='V';
const res=hasB?(a>b?['w',L.win,'✅']:a<b?['l',L.loss,'❌']:['d',L.draw,'🤝']):null;
const reb=s=>s.REB;
const best=f=>{let x=null;ps.forEach(p=>{if(f(p.s)>0&&(!x||f(p.s)>f(x.s)))x=p});return x};
const tp=best(s=>s.PTS),tr=best(reb),ta=best(s=>s.AS);
const nm=j=>j.n.split(' ')[0];
const sn=j=>{const p=j.n.split(' ');return p[0]+(p[1]?' '+p[1][0]+'.':'')};
const rv=esc(m.rival||L.noRival);
const t1=V?rv:TEAM,t2=V?TEAM:rv,s1=V?(hasB?b:'–'):a,s2=V?a:(hasB?b:'–');
const z=v=>v?'':' z';
const sh=(s,k)=>{const mk=s[k+'+'],t=mk+s[k+'-'];return`<div class="c qs${z(t)}"><b>${mk}/${t}</b><i>${t?Math.round(mk*100/t)+'%':'&nbsp;'}</i></div>`};
const row=(lab,s,cls)=>`<div class="r ${cls||''}">${lab}<div class="c pt">${s.PTS}</div>${sh(s,'T2')}${sh(s,'T3')}${sh(s,'TL')}<div class="c sep${z(reb(s))}"><b>${reb(s)}</b></div>${['AS','RB','TP','FA'].map(k=>`<div class="c${z(s[k])}"><b>${s[k]}</b></div>`).join('')}</div>`;
const hd=`<div class="r h"><div class="n"></div><div class="c pt">${L.pts.toUpperCase()}</div><div class="c qs">T2</div><div class="c qs">T3</div><div class="c qs">TL</div><div class="c sep">REB</div>${['AS','RB','TP','FA'].map(k=>`<div class="c">${AB[k]}</div>`).join('')}</div>`;
const chip=(p,lab,v)=>`<div class="ch"><b>${p?v(p.s):'–'}</b><span>${lab}</span><em>${p?esc(p.j.n):''}</em></div>`;
$('share').innerHTML=`<style>
#share{background:radial-gradient(120% 60% at 50% 0%,#5c0a0f 0%,#1a0507 55%,#070707 100%);padding:0;display:flex;flex-direction:column;align-items:center}
#share .sw{width:100%;display:flex;justify-content:center;padding:8px 6px 0;overflow:hidden}
#share .k{width:380px;flex:none;transform-origin:top center;position:relative;border-radius:22px;padding:14px 10px 10px;color:#fff;background:linear-gradient(160deg,rgba(215,20,26,.95),rgba(130,10,16,.85) 38%,rgba(25,6,8,.9) 75%);border:1px solid rgba(255,255,255,.25);box-shadow:0 20px 60px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.3);overflow:hidden;font-family:system-ui,-apple-system,sans-serif}
#share .k:before{content:"";position:absolute;inset:-40% -20% auto auto;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.18),transparent 65%);pointer-events:none}
#share .k:after{display:none;content:"";position:absolute;right:-30px;bottom:-30px;width:180px;height:180px;background:url(logo.jpg) center/cover;opacity:.06;border-radius:50%;pointer-events:none}
#share .top2{display:flex;flex-direction:column;align-items:center;gap:2px;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;opacity:.85;margin-bottom:8px}
#share .top2 img{width:34px;height:31px;border-radius:8px;object-fit:cover;box-shadow:0 2px 8px rgba(0,0,0,.4)}
#share .sb{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:6px;padding:10px 6px;border-radius:16px;background:rgba(0,0,0,.22);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(8px)}
#share .sb .t{font-weight:800;font-size:13px;text-transform:uppercase;letter-spacing:.5px;line-height:1.1;text-align:center}
#share .top2 b{font-size:11px;letter-spacing:2px;opacity:1}#share .top2 span{font-size:10px;letter-spacing:1.2px;opacity:.85}#share .top2 em{font-style:normal;font-size:9px;opacity:.65;margin-top:2px}
#share .sb .t i{display:block;font-style:normal;font-size:8.5px;font-weight:700;letter-spacing:1.5px;opacity:.65;margin-bottom:4px}
#share .sb .s{font-size:44px;font-weight:900;letter-spacing:-1px;line-height:1;text-shadow:0 4px 18px rgba(0,0,0,.45);white-space:nowrap}
#share .sb .s span{opacity:.45;font-weight:300;margin:0 4px}
#share .bd2{display:flex;justify-content:center;margin:-9px 0 8px;position:relative}
#share .bd2 span{font-size:10px;font-weight:900;letter-spacing:2px;padding:3px 12px;border-radius:20px;border:1px solid rgba(255,255,255,.3);backdrop-filter:blur(6px)}
#share .bd2 .w{background:rgba(40,170,80,.85)}.bd2 .l{background:rgba(0,0,0,.55)}.bd2 .d{background:rgba(255,255,255,.2)}
#share .chs{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:8px}
#share .ch{border-radius:12px;padding:6px 4px;text-align:center;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15)}
#share .ch b{display:block;font-size:20px;line-height:1}.ch span{display:block;font-size:8.5px;text-transform:uppercase;letter-spacing:.6px;opacity:.75;margin-top:2px}.ch em{display:block;font-style:normal;font-size:11px;font-weight:700}
#share .k{display:flex;flex-direction:column}#share .tb{flex:1;display:flex;flex-direction:column;border-radius:14px;overflow:hidden;background:rgba(0,0,0,.28);border:1px solid rgba(255,255,255,.12)}
#share .r{display:grid;grid-template-columns:1fr 30px repeat(3,35px) 28px repeat(4,25px);align-items:center;min-height:31px;flex:1;padding:0 4px;border-top:1px solid rgba(255,255,255,.07)}
#share .r:nth-child(even){background:rgba(255,255,255,.035)}
#share .r.h{flex:none;min-height:24px;border:0;background:rgba(255,255,255,.1);font-size:7.5px;font-weight:800;letter-spacing:.3px;text-transform:uppercase;opacity:.95}
#share .r.h .c i{font-size:6.5px;opacity:.7}
#share .r.tt{background:rgba(255,255,255,.14)!important;border-top:1px solid rgba(255,255,255,.3)}
#share .n{display:flex;align-items:center;gap:4px;font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden}
#share .n u{text-decoration:none;flex:none;display:inline-block;min-width:18px;height:18px;line-height:18px;padding:0 3px;border-radius:9px;background:#fff;color:#c4121a;font:900 9.5px/18px system-ui,-apple-system,sans-serif!important;text-align:center;box-sizing:border-box}
#share .n img{width:18px;height:18px;border-radius:50%;object-fit:cover;flex:none}
#share .c{text-align:center;line-height:1.05}.c b{font-size:12px;font-weight:700}.c i{display:block;font-style:normal;font-size:7.5px;opacity:.6}
#share .c.pt{font-size:17px;font-weight:900}.c.qs b{font-size:11px}
#share .c.z b,#share .c.z{opacity:.35}
#share .k,#share .k *{font-family:'Barlow Condensed',system-ui,sans-serif}
#share .n,#share .lg,#share .ch span{font-family:system-ui,-apple-system,sans-serif}
#share .sb .s{font-size:42px!important;font-weight:800!important;letter-spacing:0!important}
#share .sb .t{font-size:15px!important;font-weight:700!important;letter-spacing:1px!important}
#share .ch b{font-size:24px!important;font-weight:800}
#share .ch em{font-size:13px!important}
#share .c b{font-size:15px!important;font-weight:600}
#share .n{font-size:11.5px!important;gap:3px!important}
#share .c.pt{font-size:17px!important;font-weight:800;background:rgba(255,255,255,.08);align-self:stretch;display:flex;align-items:center;justify-content:center;flex-direction:column}
#share .r.h .c.pt{font-size:9px!important;font-weight:800}
#share .c.qs b{font-size:13.5px!important}#share .r.tt .c.qs b{font-size:12px!important}#share .r.tt .c.pt{font-size:17px!important}
#share .c i{font-size:9px!important;opacity:.7}
#share .c.sep{border-left:1px solid rgba(255,255,255,.15)}
#share .r.h{font-size:9px!important;letter-spacing:0!important}
#share .r.h .c i{font-size:7px!important}
#share .k{background:linear-gradient(165deg,rgba(220,22,28,.97),rgba(140,10,16,.9) 34%,rgba(28,6,8,.95) 72%)!important}
#share .k:before{background:repeating-linear-gradient(115deg,rgba(255,255,255,.05) 0 2px,transparent 2px 14px)!important;inset:0 0 auto 0!important;width:auto!important;height:210px!important;border-radius:0!important;-webkit-mask:linear-gradient(#000,transparent);mask:linear-gradient(#000,transparent)}
#share .top2 b{font-size:15px!important;letter-spacing:4px!important;font-weight:800}
#share .top2 span{font-size:12px!important;letter-spacing:3px!important;font-weight:600}
#share .bd2 span{font-size:12px!important;letter-spacing:3px!important;font-weight:800}
#share .k.cap:before,#share .k.cap:after{display:none!important}#share .k.cap{padding-top:60px!important;padding-bottom:26px!important}#share .k.cap .esc{top:60px!important}
#share .k.cap{background:linear-gradient(165deg,#dc161c,#8c0a10 34%,#1c0608 72%)!important;box-shadow:none!important}
#share .top2{padding:0 58px;min-height:46px;justify-content:center}
#share .esc{position:absolute;top:12px;left:12px;width:48px;height:44px;object-fit:cover;border-radius:10px;border:2px solid rgba(255,255,255,.85);box-shadow:0 4px 12px rgba(0,0,0,.35);z-index:2}

#share .lg{font-size:8.5px;opacity:.7;text-align:center;margin-top:7px;line-height:1.4}
#share .lg span{white-space:nowrap}#share .lg b{font-weight:800}
#share .shb2{position:fixed;left:0;right:0;bottom:0;display:flex;gap:8px;padding:10px;background:rgba(10,10,10,.6);backdrop-filter:blur(12px);border-top:1px solid rgba(255,255,255,.1)}
#share .shb2 button{flex:1;border-radius:12px;font-size:14px}
#share #wamsg{position:fixed;bottom:64px;left:0;right:0;text-align:center}
</style>
<div class="sw"><div class="k" id="kard">
<img class="esc" src="${LOGO}" alt=""><div class="top2"><b>Sant Pere Bàsquet</b><span>${L.cat}</span><em>${fmtF(m.fecha)}</em></div>
<div class="sb"><div class="t">${t1}</div><div class="s">${(()=>{const oc='#fff',o=x=>`<em style="font-style:normal;color:${oc}">${x}</em>`;return V?`${s1}<span>-</span>${o(s2)}`:`${o(s1)}<span>-</span>${s2}`})()}</div><div class="t">${t2}</div></div>
${res?`<div class="bd2"><span class="${res[0]}">${res[1]}</span></div>`:'<div style="height:8px"></div>'}
<div class="chs">${chip(tp,L.topPts,s=>s.PTS)}${chip(tr,L.topReb,reb)}${chip(ta,L.topAs,s=>s.AS)}</div>
<div class="tb">${hd}${ps.map(p=>row(`<div class="n">${p.j.f?`<img src="${p.j.f}">`:''}${p.j.d!==''&&p.j.d!=null?`<u>${esc(p.j.d)}</u>`:''}${esc(sn(p.j))}</div>`,p.s)).join('')}${row(`<div class="n">${L.teamW.toUpperCase()}</div>`,T,'tt')}</div>
<div class="lg"><span><b>REB</b> ${L.cols.REB.toLowerCase()}</span> · ${['AS','RB','TP','FA'].map(k=>`<span><b>${AB[k]}</b> ${L.cols[k].toLowerCase()}</span>`).join(' · ')}</div>
</div></div>
<p id="wamsg" class="msg"></p>
<div class="shb2"><button class="on" onclick="shareImg()">${L.shareImg}</button><button class="ok" onclick="copiaWA()" style="flex:none;width:56px">💬</button><button onclick="$('share').classList.add('hide')" style="flex:none;width:56px">✕</button></div>`;
WA=[`🏀 *${vsT(m,m.rival||L.noRival)}* — ${fmtF(m.fecha)}`,`_Sant Pere Bàsquet · ${L.cat}_`,`*${hasB?rsT(m,a,b):a}*${res?' '+res[2]+' '+res[1]:''}`,'',
`⭐ *${L.top}*`,tp?`• ${L.topPts}: ${nm(tp.j)} (${tp.s.PTS} ${L.pts})`:'',tr?`• ${L.topReb}: ${nm(tr.j)} (${reb(tr.s)})`:'',ta?`• ${L.topAs}: ${nm(ta.j)} (${ta.s.AS})`:'','',
`👟 *${L.players}*`,...ps.map(p=>`${dn(p.j)}: *${p.s.PTS} ${L.pts}*\n   ${line(p.s).replace('<br>','\n   ')}\n   ${shots(p.s)}`),'',
`📊 *${L.teamW}*`,line(T).replace('<br>','\n'),shots(T)].filter((x,i,arr)=>x!==''||arr[i-1]!=='').join('\n');
$('share').classList.remove('hide');$('share').scrollTop=0;
const fit=()=>{const k=$('kard');if(!k)return;k.style.transform='';k.style.minHeight='';const avW=innerWidth-12,avH=innerHeight-84;let sc=Math.min(1,avW/380);const want=Math.min(avH/sc,k.offsetHeight+(ps.length+2)*26);if(want>k.offsetHeight)k.style.minHeight=want+'px';sc=Math.min(sc,avH/k.offsetHeight);k.style.transform=`scale(${sc})`;k.parentNode.style.height=(k.offsetHeight*sc+8)+'px'};
fit();setTimeout(fit,60);onresize=fit;SHB=null;setTimeout(()=>{SHB=genImg().catch(()=>null)},400)}
function line(s){return`${s.REB} ${L.reb} · ${s.AS} ${L.ast}<br>${s.RB} ${L.stl} · ${s.TP} ${L.blk} · ${s.FA} ${L.pf}`}
function shots(s){return['T2','T3','TL'].map(k=>{const mk=s[k+'+'],t=mk+s[k+'-'];return`${k} ${mk}/${t}${t?` (${Math.round(mk*100/t)}%)`:''}`}).join(' · ')}
function cargaH2C(){return window.html2canvas?Promise.resolve():new Promise((ok,ko)=>{const sc=document.createElement('script');sc.src='vendor/html2canvas.min.js';sc.onload=ok;sc.onerror=ko;document.head.appendChild(sc)})}
async function genImg(){await cargaH2C();try{await document.fonts.ready}catch(e){}
const k=$('kard');if(!k)throw new Error('no card');const off=document.createElement('div');off.style.cssText='position:fixed;left:-10000px;top:0;width:380px;pointer-events:none';
const c=k.cloneNode(true);c.removeAttribute('id');c.style.transform='none';const rt=Math.max(screen.height,screen.width)/Math.min(screen.height,screen.width)||2.16;c.style.minHeight=Math.round(380*rt)+'px';c.classList.add('cap');off.appendChild(c);$('share').appendChild(off);
try{const cv=await html2canvas(c,{scale:3,backgroundColor:'#0a0a0b',logging:false});return await new Promise(r=>cv.toBlob(r,'image/png'))}finally{off.remove()}}
let SHB=null;
function verImg(blob){const u=URL.createObjectURL(blob);const o=document.createElement('div');o.className='imgv';o.innerHTML=`<p>${L.holdImg}</p><img src="${u}" alt=""><button onclick="this.parentNode.remove()">✕</button>`;document.body.appendChild(o)}
async function shareImg(){const me=$('wamsg');me.textContent=L.genImg;try{
const blob=await (SHB||(SHB=genImg()));if(!blob)throw new Error('blob');
const m=window.SHM||{};const fn=`SantPere_${String(m.rival||'partit').trim().replace(/[^\wÀ-ÿ]+/g,'_')}_${m.fecha||''}.png`;
const file=new File([blob],fn,{type:'image/png'});
if(navigator.canShare&&navigator.canShare({files:[file]})){try{await navigator.share({files:[file]});me.textContent=''}catch(e){if(e&&e.name==='AbortError')me.textContent='';else{me.textContent='';verImg(blob)}}}
else{me.textContent='';verImg(blob)}}
catch(e){me.textContent=L.noShare;SHB=null}}
function copiaWA(){navigator.clipboard.writeText(WA).then(()=>$('wamsg').textContent=L.copied).catch(()=>$('wamsg').textContent=L.copyFail)}
function setView(v){S.view=v;save();render();scrollTo(0,0)}
function prevM(){const e=$('mprev');if(e)e.innerHTML=L.prev(esc(vsT(S,S.rival||L.rivalPh)))}
function setLoc(v){S.loc=v;save();render()}
function eliminarM(){confirmar(L.confDelM,()=>{S.ev=[];S.redo=[];S.q=1;S.rp='';S.pista=[];S.jugaron=[];S.rival='';S.fecha=hoy();S.loc='L';S.view='cfg';cur=null;cambio=S.jug.length>0;OUT=[];IN=[];save();render()})}
const vsT=(m,rv)=>m.loc==='V'?`${rv} vs ${TEAM}`:`${TEAM} vs ${rv}`;
const rsT=(m,a,b)=>b===''||b==null?`${a} ${L.pts}`:(m.loc==='V'?`${b} - ${a}`:`${a} - ${b}`);
function confirmar(t,f){$('mtxt').textContent=t;$('msi').onclick=()=>{cerrar();f()};$('modal').classList.remove('hide')}
function cerrar(){$('modal').classList.add('hide')}
function nuevo(){confirmar(L.confNew,()=>{S.ev=[];S.redo=[];S.q=1;S.rp='';S.pista=[];S.jugaron=[];cur=null;save();render();$('msg').textContent=''})}
function swInit(){if(!('serviceWorker' in navigator))return;navigator.serviceWorker.register('sw.js').then(reg=>{
const show=()=>{if(document.getElementById('updb'))return;const b=document.createElement('div');b.id='updb';b.innerHTML=`<span>${L.upd}</span><button>${L.updBtn}</button>`;b.querySelector('button').onclick=()=>{const w=reg.waiting;if(w)w.postMessage('skip')};document.body.appendChild(b)};
if(reg.waiting&&navigator.serviceWorker.controller)show();
reg.addEventListener('updatefound',()=>{const w=reg.installing;if(w)w.addEventListener('statechange',()=>{if(w.state==='installed'&&navigator.serviceWorker.controller)show()})});
setInterval(()=>reg.update().catch(()=>{}),3600000)}).catch(()=>{});
let rl=!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener('controllerchange',()=>{if(rl){rl=false;return}rl=true;location.reload()})}
(async()=>{try{await DB.open()}catch(e){document.body.innerHTML='<p style="color:#fff;padding:20px">No se puede abrir el almacenamiento del dispositivo.</p>';return}
const s0=await DB.get('S');if(s0)S=Object.assign(S,s0);H=(await DB.get('H'))||[];const l0=await DB.get('L');if(l0&&T[l0]){LANG=l0;L=T[l0]}
if(!S.jug.length&&!H.length&&Array.isArray(CFG.seed)){S.jug=CFG.seed.map((n,i)=>({id:1000+i,d:String(n[0]),n:n[1]}));save()}
H.sort((a,b)=>(b.fecha||'').localeCompare(a.fecha||''));
try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist()}catch(e){}
if(!S.view)S.view=S.ev.length?'play':'cfg';
if(S.pista.length<5&&S.jug.length)cambio=true;
curTab=S.jug.length?'partido':'equipo';
build();swInit()})();
