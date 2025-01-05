#cd ~ 
#wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh
#sh install.sh
#Plug for vim
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

#zshrc
#curl https://burgburg.net/computerstuff/zshrc -o .zshrc

#vimrc
curl https://burgburg.net/computerstuff/vimrc -o .vimrc

#cargo
#curl https://sh.rustup.rs -sSf | sh

# installs fnm (Fast Node Manager)
#curl -fsSL https://fnm.vercel.app/install | sh

# activate fnm
#source ~/.zshrc

# installs nvm (Node Version Manager)
#curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# download and install Node.js (you may need to restart the terminal)
#nvm install 20
# verifies the right Node.js version is in the environment
#node -v # should print `v20.18.0`

# verifies the right npm version is in the environment
#npm -v # should print `10.8.2`

#kitty
#mkdir ~/.config/kitty
#curl  https://burgburg.net/kitty -o ~/.config/kitty.conf


#fzf 
#git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
#~/.fzf/install