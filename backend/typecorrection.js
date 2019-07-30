var file = cat('data/admin_active.txt');
var users = file.split('\n');
print('Now processing admin_active...');
for(var i = 0; i < users.length; i++) {
  db.revisions.updateMany({'user':users[i]}, {$set: {'usertype':'admin'}});
}
print('Finished at:')
print(new Date());

file = cat('data/admin_former.txt');
users = file.split('\n');
print('Now processing admin_former...');
for(var i = 0; i < users.length; i++) {
  db.revisions.updateMany({'user':users[i]}, {$set: {'usertype':'admin'}});
}
print('Finished at:')
print(new Date());

file = cat('data/admin_inactive.txt');
users = file.split('\n');
print('Now processing admin_inactive...');
for(var i = 0; i < users.length; i++) {
  db.revisions.updateMany({'user':users[i]}, {$set: {'usertype':'admin'}});
}
print('Finished at:')
print(new Date());

file = cat('data/admin_semi_active.txt');
users = file.split('\n');
print('Now processing admin_semi_active...');
for(var i = 0; i < users.length; i++) {
  db.revisions.updateMany({'user':users[i]}, {$set: {'usertype':'admin'}});
}
print('Finished at:')
print(new Date());

file = cat('data/bot.txt');
users = file.split('\n');
print('Now processing bot...');  
for(var i = 0; i < users.length; i++) {
  db.revisions.updateMany({'user':users[i]}, {$set: {'usertype':'bot'}});
}
print('Finished at:')
print(new Date());