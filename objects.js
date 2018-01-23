<<<<<<< HEAD
var playlist = {artistName: "songTitle"}

function updatePlaylist(){
=======
var playlist = {artistName: songTitle}

function updatePlaylist(artistName, songTitle){
>>>>>>> 5b3b8187ca66923877af65df126428c1a6ee6f91
  delete playlist.artistName
  return Object.assign({}, playlist, { 'Phil Ochs': "Here's to the State of Mississippi"})
}

<<<<<<< HEAD
function removeFromPlaylist(){
  delete playlist.artistName
  Object.assign({}, playlist, { Kanye: "Gold Digger" })
  delete playlist.Kanye
  return playlist
=======
function removeFromPlaylist(playlist, artistName){
  playlist = {Kanye: "Gold Digger"}
  return delete playlist.Kanye
>>>>>>> 5b3b8187ca66923877af65df126428c1a6ee6f91
}