// Little Monsters Fan Registration System
// Front-end demo: fan records are saved in this browser's localStorage.
// Replace the sample album/event information with verified details before publishing.

const albums = [
  {name:"The Fame",year:2008,genre:"Dance-pop",color:"#5a6c82",cover:"https://i.redd.it/2k92kxeo7r7f1.jpg",description:"The debut album that introduced Gaga's bold pop universe to the world.",songs:["Just Dance","LoveGame","Paparazzi","Poker Face","Eh, Eh (Nothing Else I Can Say)","Beautiful, Dirty, Rich","The Fame","Money Honey","Starstruck","Boys Boys Boys","Paper Gangsta","Brown Eyes","I Like It Rough","Summerboy"]},
  {name:"The Fame Monster",year:2009,genre:"Pop / dance-pop",color:"#d9dce1",cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjai_FH6UYkxoKzPed8DTxYNMRLb4Pc5SaCDHon9lRczQejBhxMPzw6rw&s=10",description:"A darker companion project exploring fame, fear, and the monsters that follow.",songs:["Bad Romance","Alejandro","Monster","Speechless","Dance in the Dark","Telephone","So Happy I Could Die","Teeth"]},
  {name:"Born This Way",year:2011,genre:"Electropop",color:"#20202a",cover:"https://static.wikia.nocookie.net/ladygaga/images/7/71/BornThisWay-DeluxeEdition2.jpg/revision/latest/scale-to-width/360?cb=20250907191656",description:"An album centered on identity, self-acceptance, freedom, and belonging.",songs:["Marry the Night","Born This Way","Government Hooker","Judas","Americano","Hair","Scheiße","Bloody Mary","Bad Kids","Fashion of His Love","Highway Unicorn (Road to Love)","Heavy Metal Lover","Electric Chapel","The Queen","You and I","The Edge of Glory"]},
  {name:"ARTPOP",year:2013,genre:"Electronic / art pop",color:"#f1b5d6",cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYsQvDw7YpD6ve2UYtyPU411_C8Kh9y5S5du4LMvz5xJDq6kO0_Mxcss&s=10",description:"A maximalist pop era that brought art, fame, and electronic experimentation together.",songs:["Aura","Venus","G.U.Y.","Sexxx Dreams","Jewels N' Drugs","MANiCURE","Do What U Want","ARTPOP","Swine","Donatella","Fashion!","Mary Jane Holland","Dope","Gypsy","Applause"]},
  {name:"Cheek to Cheek",year:2014,genre:"Jazz",color:"#8c776c",cover:"https://i.scdn.co/image/ab67616d0000b2734883efb117dd51c4f3f88e93",description:"A jazz collaboration with Tony Bennett celebrating classic American standards.",songs:["Anything Goes","Cheek to Cheek","They All Laughed","I Can't Give You Anything but Love","I Can't Give You Anything but Love","Nature Boy","Goody Goody","Ev'ry Time We Say Goodbye","Firefly","I Won't Dance","Sophisticated Lady","Let's Face the Music and Dance","But Beautiful","It Don't Mean a Thing (If It Ain't Got That Swing)"]},
  {name:"Joanne",year:2016,genre:"Country / soft rock",color:"#e8c9ae",cover:"https://i.scdn.co/image/ab67616d0000b2738093238ec0c71ef7c95c8fb1",description:"A personal, stripped-back record shaped by family, grief, and resilience.",songs:["Diamond Heart","A-YO","Joanne","John Wayne","Dancin' in Circles","Perfect Illusion","Million Reasons","Sinner's Prayer","Come to Mama","Hey Girl","Angel Down","Grigio Girls","Just Another Day","Angel Down (Work Tape)"]},
  {name:"A Star Is Born",year:2018,genre:"Soundtrack / pop",color:"#c5b5a8",cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWDe_b_tOYJri1ta68swYiEyfSCDUQETeWb-HnqxAlmrpALovpzdOBA4&s=10",description:"The soundtrack to the 2018 film, featuring emotional ballads and live performance energy.",songs:["Black Eyes","La Vie en Rose","Maybe It's Time","Shallow","Music to My Eyes","Diggin' My Grave","Always Remember Us This Way","Look What I Found","Heal Me","I'll Never Love Again","Is That Alright?","Why Did You Do That?","Before I Cry"]},
  {name:"Chromatica",year:2020,genre:"Dance-pop",color:"#ff9ebd",cover:"https://i.scdn.co/image/ab67616d0000b2736040effba89b9b00a6f6743a",description:"A return to dance music that explores healing, struggle, and finding joy through movement.",songs:["Chromatica I","Alice","Stupid Love","Rain on Me","Free Woman","Fun Tonight","Chromatica II","911","Plastic Doll","Sour Candy","Enigma","Replay","Chromatica III","Sine from Above","1000 Doves","Babylon"]},
  {name:"Love for Sale",year:2021,genre:"Jazz",color:"#c7b6a4",cover:"https://upload.wikimedia.org/wikipedia/en/7/7a/Love_for_Sale_%282021_album_cover%29.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",description:"A second jazz collaboration with Tony Bennett, honoring the songs of Cole Porter.",songs:["It's De-Lovely","Night and Day","Love for Sale","Do I Love You","I Concentrate on You","I Get a Kick Out of You","So in Love","Let's Do It","Dream Dancing","Just One of Those Things"]},
  {name:"Harlequin",year:2024,genre:"Jazz / soundtrack",color:"#c8b7a5",cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJvgOUwqnPf8RG2exE5lWp_543UX1I5oG5BO_X-gWoQiLUzd_-DHsiBHL&s=10",description:"A companion album inspired by the world and music of Joker: Folie à Deux.",songs:["Good Morning","Get Happy (2024)","Oh, When the Saints","World on a String","If My Friends Could See Me Now","That's Entertainment","Smile","The Joker","Folie à Deux","Gonna Build a Mountain","Close to You","Happy Mistake","That's Life"]},
  {name:"Mayhem",year:2025,genre:"Pop",color:"#b5a5c7",cover:"https://i.scdn.co/image/ab67616d0000b273b0860cf0a98e09663c82290c",description:"A new chapter in Gaga's evolving pop world. Confirm the final tracklist against official album materials.",songs:["Disease","Abracadabra","Garden of Eden","Perfect Celebrity","Vanish Into You","Killah","Zombieboy","LoveDrug","How Bad Do U Want Me","Don't Call Tonight","Shadow of a Man","The Beast","Blade of Grass","Die with a Smile"]}
];

const STORAGE_KEY = "littleMonstersFanRecords_v1";
let fans = loadFans();
const $ = (id) => document.getElementById(id);
const albumModal = () => bootstrap.Modal.getOrCreateInstance($("albumModal"));

function loadFans() {
  try { const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); return Array.isArray(saved) ? saved : []; }
  catch { return []; }
}
function saveFans() { localStorage.setItem(STORAGE_KEY, JSON.stringify(fans)); }
function escapeHTML(value="") {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function albumByName(name) { return albums.find(a => a.name === name); }
function toast(message) {
  $("toastMessage").textContent = message;
  bootstrap.Toast.getOrCreateInstance($("appToast"), {delay:2800}).show();
}
function populateAlbumSelects() {
  const options = albums.map(a => `<option value="${escapeHTML(a.name)}">${escapeHTML(a.name)} (${a.year})</option>`).join("");
  $("favoriteAlbum").insertAdjacentHTML("beforeend", options);
  $("favoriteAlbum").addEventListener("change", updateSongOptions);
  updateSongOptions();
}
function updateSongOptions(selected="") {
  const album = albumByName($("favoriteAlbum").value);
  $("favoriteSong").innerHTML = `<option value="">${album ? "Choose a favorite song (optional)" : "Choose an album first"}</option>` +
    (album ? album.songs.map(song => `<option ${song===selected?"selected":""} value="${escapeHTML(song)}">${escapeHTML(song)}</option>`).join("") : "");
}
function renderAlbums() {
  $("albumGrid").innerHTML = albums.map((a,i) => `
    <div class="col-6 col-md-4 col-xl-3">
      <article class="album-card" role="button" tabindex="0" data-album="${i}" aria-label="Explore ${escapeHTML(a.name)}">
        <div class="album-art" style="background:linear-gradient(135deg,${a.color},#15111b)">
          ${a.cover ? `<img src="${a.cover}" alt="${escapeHTML(a.name)} album cover" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">` : ""}
          <div class="album-placeholder" style="display:${a.cover?"none":"grid"}">${escapeHTML(a.name)}</div>
          <span class="album-year">${a.year}</span>
        </div>
        <div class="album-card-body"><h3>${escapeHTML(a.name)}</h3><p>${escapeHTML(a.genre)}</p><span class="album-open">View tracklist</span></div>
      </article>
    </div>`).join("");
  $("albumGrid").querySelectorAll("[data-album]").forEach(card => {
    const open = () => showAlbum(Number(card.dataset.album));
    card.addEventListener("click", open);
    card.addEventListener("keydown", e => { if(e.key==="Enter"||e.key===" "){e.preventDefault();open();} });
  });
}
function showAlbum(index) {
  const a = albums[index];
  $("albumModalTitle").textContent = a.name;
  $("albumModalBody").innerHTML = `
    <div class="row g-4 align-items-start">
      <div class="col-md-5 text-center">
        <div class="album-art modal-album-art mx-auto" style="background:linear-gradient(135deg,${a.color},#15111b);aspect-ratio:1;overflow:hidden;display:grid;place-items:center">
          ${a.cover ? `<img src="${a.cover}" alt="${escapeHTML(a.name)} cover" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">` : ""}
          <div class="album-placeholder" style="display:${a.cover?"none":"grid"}">${escapeHTML(a.name)}</div>
        </div>
        <p class="mt-3 mb-1 text-secondary">${a.year} · ${escapeHTML(a.genre)}</p>
        <button class="btn btn-gaga btn-sm mt-2" id="chooseAlbumBtn">Choose this album</button>
      </div>
      <div class="col-md-7"><p class="album-description">${escapeHTML(a.description)}</p><h3 class="h6 mt-4 mb-3">TRACKLIST <span class="text-secondary">(${a.songs.length} songs listed)</span></h3><ol class="song-list">${a.songs.map(s=>`<li>${escapeHTML(s)}</li>`).join("")}</ol></div>
    </div>`;
  $("chooseAlbumBtn").addEventListener("click", () => {
    $("favoriteAlbum").value = a.name; updateSongOptions(); albumModal().hide();
    $("register").scrollIntoView({behavior:"smooth"}); toast(`${a.name} selected as your favorite album.`);
  });
  albumModal().show();
}
function renderEvents() {
  $("eventsGrid").innerHTML = events.map(e => `<div class="col-md-6 col-xl-4"><article class="event-card"><div class="event-date">${escapeHTML(e.date)}</div><h3>${escapeHTML(e.title)}</h3><p>${escapeHTML(e.description)}</p><span class="event-tag">${escapeHTML(e.tag)}</span></article></div>`).join("");
}
function renderStats() {
  $("totalFans").textContent = fans.length;
  $("ogFans").textContent = fans.filter(f=>f.type==="OG Monster").length;
  $("newFans").textContent = fans.filter(f=>f.type==="New Monster").length;
  $("albumCount").textContent = new Set(fans.map(f=>f.album).filter(Boolean)).size;
  $("directoryCount").textContent = fans.length;
}
function renderFans() {
  const query = $("searchFan").value.trim().toLowerCase();
  const type = $("filterType").value;
  const sort = $("sortFans").value;
  let list = fans.filter(f => {
    const haystack = [f.name,f.email,f.type,f.album,f.song,f.era].join(" ").toLowerCase();
    return haystack.includes(query) && (!type || f.type===type);
  });
  list.sort(sort==="name" ? (a,b)=>a.name.localeCompare(b.name) : (a,b)=>b.createdAt-a.createdAt);
  $("fanTableBody").innerHTML = list.map(f => `<tr>
    <td><div class="fan-name">${escapeHTML(f.name)}</div><div class="fan-email">${escapeHTML(f.email)}</div></td>
    <td><span class="fan-badge ${f.type==="New Monster"?"new":""}">${escapeHTML(f.type)}</span></td>
    <td>${escapeHTML(f.album)}</td><td>${escapeHTML(f.song || "—")}</td>
    <td class="text-nowrap"><button class="action-btn" title="Edit fan" aria-label="Edit ${escapeHTML(f.name)}" data-edit="${f.id}">Edit</button><button class="action-btn delete" title="Delete fan" aria-label="Delete ${escapeHTML(f.name)}" data-delete="${f.id}">Delete</button></td>
  </tr>`).join("");
  $("emptyState").style.display = list.length ? "none" : "block";
  $("fanTableBody").querySelectorAll("[data-edit]").forEach(b=>b.addEventListener("click",()=>editFan(b.dataset.edit)));
  $("fanTableBody").querySelectorAll("[data-delete]").forEach(b=>b.addEventListener("click",()=>deleteFan(b.dataset.delete)));
  renderStats();
}
function resetForm() {
  $("fanForm").reset(); $("fanForm").classList.remove("was-validated"); $("editId").value="";
  $("formHeading").textContent="Fan Registration"; $("submitBtn").textContent="Register";
  $("cancelEdit").classList.add("d-none"); $("messageCount").textContent="0"; updateSongOptions();
}
function editFan(id) {
  const f = fans.find(x=>x.id===id); if(!f) return;
  $("editId").value=f.id; $("fanName").value=f.name; $("fanEmail").value=f.email; $("fanType").value=f.type;
  $("favoriteAlbum").value=f.album; updateSongOptions(f.song); $("fanSince").value=f.era||""; $("fanMessage").value=f.message||"";
  $("messageCount").textContent=($("fanMessage").value||"").length;
  $("formHeading").textContent="Edit Fan Profile"; $("submitBtn").textContent="Save changes";
  $("cancelEdit").classList.remove("d-none"); $("fanForm").classList.remove("was-validated");
  $("register").scrollIntoView({behavior:"smooth"}); $("fanName").focus();
}
function deleteFan(id) {
  const f = fans.find(x=>x.id===id); if(!f) return;
  if(!confirm(`Delete ${f.name}'s fan profile? This cannot be undone.`)) return;
  fans=fans.filter(x=>x.id!==id); saveFans(); renderFans(); toast("Fan profile deleted.");
}
$("fanForm").addEventListener("submit", e => {
  e.preventDefault(); e.stopPropagation();
  const form=$("fanForm"); form.classList.add("was-validated");
  if(!form.checkValidity()) return;

  const id=$("editId").value;
  const email=$("fanEmail").value.trim().toLowerCase();
  const duplicate=fans.some(f=>f.email.toLowerCase()===email && f.id!==id);
  if(duplicate){
    $("fanEmail").setCustomValidity("This email is already registered.");
    $("fanEmail").reportValidity();
    $("fanEmail").setCustomValidity("");
    toast("That email is already registered.");
    return;
  }

  const record={
    id:id||`${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name:$("fanName").value.trim(),
    email,
    type:$("fanType").value,
    album:$("favoriteAlbum").value,
    song:$("favoriteSong").value,
    era:$("fanSince").value,
    message:$("fanMessage").value.trim(),
    createdAt:id?(fans.find(f=>f.id===id)?.createdAt||Date.now()):Date.now()
  };

  if(id){
    fans = fans.map(f => f.id === id ? record : f);
    toast("Fan profile updated!");
  } else {
    fans.unshift(record);
    toast("Fan profile saved!");
  }

  saveFans();
  resetForm();
  renderFans();
});
$("cancelEdit").addEventListener("click",resetForm);
$("searchFan").addEventListener("input",renderFans);
$("filterType").addEventListener("change",renderFans);
$("sortFans").addEventListener("change",renderFans);
$("fanMessage").addEventListener("input",()=> $("messageCount").textContent=$("fanMessage").value.length);

populateAlbumSelects(); renderAlbums(); renderFans();
