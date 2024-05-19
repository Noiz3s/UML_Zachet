# UML_Zachet

[Pdf с диаграммами](Diagrams.pdf)

Описание проекта:
Это веб-приложение для поддержки и продаж видеоигры, поэтому функционал был выбран соответствующий. Также есть несколько аспектов с изменениям:
1) Пункт "просмотр информации о игре" из первой диаграммы реализован условной *info about game* на главной странице чтобы не занимать много пространства текстом, не связанным с проектом.
2) Идейно по-прежнему предусмотрено подключение платежной API, но из-за невозможности с моей стороны это реализовать я убрал с диаграмм API, а также на самом сайте при нажатии кнопки "купить игру" она считается автоматически купленной и отобразится на странице аккаунта.
3) Сайт может немного долговато подгружать информацию из БД, поэтому если на станицах posts и roadmap не будет записей, нужно подождать пару секунд и их прогрузит.
4) Для пользователей-админов появляется скрытый функционал, который не видно обычному пользователю, а именно:
   возможность добавлять и удалять задачи в roadmap (задачи становятся кликабельными)
   возможность удалять посты (в окошке с подробной информацией о посте появится соответствующая кнопка)
5) Чтобы зарегистрироваться нужно ввести адрес электронной почты, который пройдет проверку (проверки на уникальность нет, так что можно использовать что угодно типа a@mail.ru)
6) Чтобы сделать пользователя админом, нужно авторизоваться и перейти на вкладку account, там будет нужная кнопка.
7) Чтобы выйти из аккаунта, нужно зайти на вкладку account, там будет соответствующая кнопка.
8) На диаграмме последовательности я выделил справа UserRepository как отдельный класс для большей наглядности и более понятного и удобного просмотра, в коде репозиторий находится в классе UserService, и если бы я оставил репозиторий и сервис в одном классе, было бы много self-message, что сильно ухудшало читаемость.

   

В БД уже есть аккаунт админа, если нужен будет к нему доступ, то логин - Ǎ̴̛̤̪̝͎͈̗͉̇̃͜ḍ̸͉̽̄́m̵̢͓͇͖̬͈̯̣̩̹̱͎̰̽̽͊̐̿͊͂͑͑̕ỉ̴̼͚̝̼̖̝͊̾͜n̵̳̜̐̔̾͆̀̍̋̑͐̾̕͜͝  , а пароль - a (английская) (логин можно отсюда прямо и скопировать)



