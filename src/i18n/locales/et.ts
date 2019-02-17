// Estonian

import { Locale } from "../locale";
export class et implements Locale {
  atX0SecondsPastTheMinuteGt20(): string {
    return null;
  }
  atX0MinutesPastTheHourGt20(): string {
    return null;
  }
  commaMonthX0ThroughMonthX1(): string {
    return null;
  }
  commaYearX0ThroughYearX1(): string {
    return null;
  }

  use24HourTimeFormatByDefault() {
    return true;
  }

  anErrorOccuredWhenGeneratingTheExpressionD() {
    return "Avaldise kirjelduse genereerimisel tekkis viga. Kontroli cron avalidse süntaksit.";
  }
  everyMinute() {
    return "iga minut";
  }
  everyHour() {
    return "iga tund";
  }
  atSpace() {
    return "Kell ";
  }
  everyMinuteBetweenX0AndX1() {
    return "Iga minut vahemikus %s ja %s";
  }
  at() {
    return "Kell";
  }
  spaceAnd() {
    return " ja";
  }
  everySecond() {
    return "iga sekund";
  }
  everyX0Seconds() {
    return "iga %s. sekund"; // todo
  }
  secondsX0ThroughX1PastTheMinute() {
    return "minuti %s. kuni %s. sekundis"; // todo
  }
  atX0SecondsPastTheMinute() {
    return "minuti %s. sekundis"; // todo
  }
  everyX0Minutes() {
    return "igal %s. minutil";
  }
  minutesX0ThroughX1PastTheHour() {
    return "minutid %s kuni %s tunnis"; // todo
  }
  atX0MinutesPastTheHour() {
    return "tunni %s. minutil"; // todo
  }
  everyX0Hours() {
    return "iga %s. tund";
  }
  betweenX0AndX1() {
    return "vahemikus %s ja %s";
  }
  atX0() {
    return "kell %s";
  }
  commaEveryDay() {
    return ", iga päev";
  }
  commaEveryX0DaysOfTheWeek() {
    return ", nädala igal %s. päeval";
  }
  commaX0ThroughX1() {
    return ", %s kuni %s";
  }
  first() {
    return "esimene";
  }
  second() {
    return "teine";
  }
  third() {
    return "kolmas";
  }
  fourth() {
    return "neljas";
  }
  fifth() {
    return "viies";
  }
  commaOnThe() {
    return ", on the "; //todo
  }
  spaceX0OfTheMonth() {
    return " %s kuus"; //todo
  }
  lastDay() {
    return "viimane päev";
  }
  commaOnTheLastX0OfTheMonth() {
    return ", kuu viimasel %s";
  }
  commaOnlyOnX0() {
    return ", ainult %s";
  }
  commaAndOnX0() {
    return ", ja %s";
  }
  commaEveryX0Months() {
    return ", igal %s kuul";
  }
  commaOnlyInX0() {
    return ", ainult %s";
  }
  commaOnTheLastDayOfTheMonth() {
    return ", kuu viimasel päeval";
  }
  commaOnTheLastWeekdayOfTheMonth() {
    return ", kuu viimasel nädalapäeval";
  }
  commaDaysBeforeTheLastDayOfTheMonth() {
    return ", %s päeva enne kuu viimast päeva";
  }
  firstWeekday() {
    return "esimene nädalapäev";
  }
  weekdayNearestDayX0() {
    return "nädalapäeva lähim päev %s";
  }
  commaOnTheX0OfTheMonth() {
    return ", kuu igal %";
  }
  commaEveryX0Days() {
    return ", iga %s päeva järel";
  }
  commaBetweenDayX0AndX1OfTheMonth() {
    return ", vahemikus päeval %s ja %s kuus";
  }
  commaOnDayX0OfTheMonth() {
    return ", kuu %s. päeval";
  }
  commaEveryMinute() {
    return ", iga minut";
  }
  commaEveryHour() {
    return ", iga tund";
  }
  commaEveryX0Years() {
    return ", iga %s aasta";
  }
  commaStartingX0() {
    return ", alates %s";
  }
  daysOfTheWeek() {
    return ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
  }
  monthsOfTheYear() {
    return [
      "Jaanuar",
      "Veebruar",
      "Märts",
      "Aprill",
      "Mai",
      "Juuni",
      "Juuli",
      "August",
      "September",
      "Oktoober",
      "November",
      "Detsember"
    ];
  }
}
