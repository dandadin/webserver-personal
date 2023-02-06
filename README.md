# HOW TO SETUP/INSTALL
```
yum install -y dnf
yum update

useradd dan
passwd dan ***

(private u me, public na server)

mkdir .ssh
joe ./.ssh/authorized_keys
<paste>
chmod 600 ./.ssh/authorized_keys
chmod 700 ./.ssh
dnf install -y joe git docker docker-compose
sudo dnf install 'dnf-command(config-manager)'
sudo dnf config-manager --add-repo https://cli.github.com/packages/rpm/gh-cli.repo
sudo dnf install gh
gh auth login
<proklikat se>
git clone https://github.com/dandadin/deca.git
git config --global user.name "Dan Simanek"
git config --global user.email "dan.simanek@seznam.cz"
git config --global push.default simple
```