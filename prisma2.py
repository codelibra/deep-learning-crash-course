import dropbox

dbx = dropbox.Dropbox('<API_TOKEN>')
print(dbx.users_get_current_account())

f= open("~/Downloads/googly.jpg","rb")

# to upload (content, dest)
dbx.files_upload(f.read(), "/prisma/google.jpg")

for entry in dbx.files_list_folder('/prisma').entries:
    print(entry.name)


dbx.files_download_to_file("~/Desktop/googly.jpg", "/prisma/google.jpg")
