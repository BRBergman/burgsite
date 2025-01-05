cargo install nu --locked

curl -sS https://starship.rs/install.sh | sh
mkdir ~/.cache/starship
starship init nu | save -f ~/.cache/starship/init.nu