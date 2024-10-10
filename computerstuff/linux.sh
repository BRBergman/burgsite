cd ~ 
wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh
sh install.sh
curl https://burgburg.net/computerstuff/zshrc -o .zshrc
curl https://burgburg.net/computerstuff/vimrc -o .vimrc
cp -i ~/computerstuff/* ~
rm -rf computerstuff