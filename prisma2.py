import dropbox

dbx = dropbox.Dropbox('56Avmht1CGkAAAAAAAABS8gYYmjrmVC5HZc6ThJbMT168Y1MrWhY0wjfXUln64i4')
print(dbx.users_get_current_account())

f= open("/Users/aniruddhkhera/Downloads/googly.jpg","rb")

# to upload (content, dest)
dbx.files_upload(f.read(), "/prisma/google.jpg")

for entry in dbx.files_list_folder('/prisma').entries:
    print(entry.name)


dbx.files_download_to_file("/Users/aniruddhkhera/Desktop/googly.jpg", "/prisma/google.jpg")
