var file = cat('data/admin_active.txt');
var users = file.split('\n');
for(var i = 0; i < users.length; i++) {
  db.revisions.updateMany({'user':users[i]}, {$set: {'usertype':'admin'}});
}

file = cat('data/admin_former.txt');
users = file.split('\n');
for(var i = 0; i < users.length; i++) {
  db.revisions.updateMany({'user':users[i]}, {$set: {'usertype':'admin'}});
}

file = cat('data/admin_inactive.txt');
users = file.split('\n');
for(var i = 0; i < users.length; i++) {
  db.revisions.updateMany({'user':users[i]}, {$set: {'usertype':'admin'}});
}

file = cat('data/admin_semi_active.txt');
users = file.split('\n');
for(var i = 0; i < users.length; i++) {
  db.revisions.updateMany({'user':users[i]}, {$set: {'usertype':'admin'}});
}

file = cat('data/bot.txt');
users = file.split('\n');
for(var i = 0; i < users.length; i++) {
  db.revisions.updateMany({'user':users[i]}, {$set: {'usertype':'bot'}});
}