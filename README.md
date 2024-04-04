# *CloudSense*
## Projektu interfejsu użytkownika
Wstępny projekt interfejsu aplikacji został utowrzony z wykorzystniem narzędzi *Figma* - [link](https://www.figma.com/file/dPz0MtkKu7vdbKVLlLfr7h/CloudSense-%7C-Web-App-UI?type=design&node-id=0-1&mode=design).
## Opis aplikacji
*CloudSense* jest webową alikacją pogodową zapewniającą użyutkownikom szybki i łatwy dostęp do aktualnych prognoz pogodowych z różnych regionów świata.
Aplikacja oferuje prognozy na kilka dni w przód, umożliwiając planowanie działań zgodnie z warunkami pogodowymi.
Dodatkowo zapewnia także archiwalne zapisy pogody dla danej lokalizacji.
## Opis techniczny
### Interfej użytkownika
Interfejs użytkonika podzielony jest na 5 widoków - *Settings*, *Dashboard*, *Week*, *World*, *Archive*.
##### Widok *Settings*
Umożliwia zmianę ustawień aplikacji takich jak:
- Jednostki temperatury: stopnie Celsjusza, stopnie Fahrenheita.
- Jednostki wilgotności powietrza: %, g/m^3
##### Widok *Dashboard*
Jest to widok domyślny.
Przedstawia aktualne warunki pogodowe w wybranej lokalizacji domyślnej oraz ich prognozowane zmiany w obrębie aktualnego dnia.
Dostępne metryki: temperatura, ciśnienie atmosferyczne, wilgotność powietrza, słowny opis prognozowanych warunków pogodownych.
Z jego poziomu możliwa jest zmiana lokalizacji domyślnej.
##### Widok *Week*
Przedstawia prognoze pogodny na najbliższe 7 dni w lokalizacji domyślnej.
Każdy dzień opisany jest za pomocą następujących metryk: temperatura, ciśnienie atmosferyczne, wilgotność powietrza, słowny opis prognozowanych warunków pogodownych.
Dodatkowo do każdego dnia przydzielony jest piktogram obrazowo przedstawiający prognozowane warunki atmosferyczne.
Widok umożliwia również wykreślenie wykresu prognozowanej temperatury w czasie.
Z jego poziomu możliwa jest zmiana lokalizacji domyślnej.
##### Widok *World*
Przedstawia aktuale warnuki pogodowe w puli wybranych przez użytkownika lokalizacji nie będących lokalizacją domyślną.
Każda lokalizacja opisana jest za pomocą następujących metryk: temperatura, ciśnienie atmosferyczne, wilgotność powietrza, słowny opis prognozowanych warunków pogodownych.
Dodatkowo, do każdej lokalizacji przydzielony jest piktogram, obrazowo przedstawiający aktualne warunki atmosferyczne.
##### Widok *Archive*
Przedstawia archiwalne zapisy warnuków pogodowych w lokalizacji domyślnej.
Użytkownik po wybraniu pożądanego dnia z przeszłości z dedykowanego w tym celu menu otrzymuje następujące metryki: temperatura, ciśnienie atmosferyczne, wilgotność powietrza, słowny opis zarejestrowanych warunków pogodownych.
Dodatkowo zestaw informacji zwornych jest oparzony piktogramem obrazowo przedstawiającym zarejestronwane w tym dniu warunki atmosferyczne.
### Źródła danych
Głownym źródłem informacji pogodowych będzie publiczne API [OpenWeatherMapAPI](https://openweathermap.org/).

