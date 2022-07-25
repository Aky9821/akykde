#!/bin/sh
git clone https://github.com/vinceliuice/Monterey-kde
cd Monterey-kde/
./install.sh
cd ..
git clone https://github.com/vinceliuice/WhiteSur-cursors
cd WhiteSur-cursors
sudo ./install.sh
cd ..
git clone https://github.com/vinceliuice/Tela-icon-theme
cd Tela-icon-theme
./install.sh
cd ..
git clone https://github.com/vinceliuice/ChromeOS-kde
cd ChromeOS-kde
./install.sh
cd ..
git clone https://github.com/Zren/plasma-applet-eventcalendar
cd plasma-applet-eventcalendar
./install
cd ..
cp -r Akytheme /$HOME/.local/share/plasma/desktoptheme

yay -Syu google-chrome visual-studio-code-bin spotify freeoffice vlc barrier nvidia nvidia-utils nvidia-settings terminator kdeconnect qbittorrent telegram-desktop gdb discord


\cp dolphinrc /$HOME/.config/dolphinrc
\cp dolphinui.rc /$HOME/.local/share/kxmlgui5/dolphin/dolphinui.rc



cp -a fonts/ /$HOME/.local/share/fonts/

sudo \cp index.theme /usr/share/icons/default/index.theme

yay -Syu zsh-syntax-highlighting zsh autojump zsh-autosuggestions


