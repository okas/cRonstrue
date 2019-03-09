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
    return "Igal minutil vahemikus %s ja %s";
  }
  at() {
    return "Kell";
  }
  spaceAnd() {
    return " ja";
  }
  everySecond() {
    return "igal sekundil";
  }
  everyX0Seconds() {
    return "igal %s. sekundil"; // todo
  }
  secondsX0ThroughX1PastTheMinute() {
    return "minuti %s. kuni %s. sekunditel"; // todo
  }
  atX0SecondsPastTheMinute() {
    return "minuti %s. sekundil"; // todo
  }
  everyX0Minutes() {
    return "igal %s. minutil";
  }
  minutesX0ThroughX1PastTheHour() {
    return "vahemikus %s kuni %s"; // todo
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
    return ", %s nädala päeval";
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
    return " kuu %s"; //todo
  }
  lastDay() {
    return "viimasel päeval";
  }
  commaOnTheLastX0OfTheMonth() {
    return ", kuu viimasel %s";
  }
  commaOnlyOnX0() {
    return ", üksnes %s";
  }
  commaAndOnX0() {
    return ", ja %s";
  }
  commaEveryX0Months() {
    return ", igal %s kuul";
  }
  commaOnlyInX0() {
    return ", üksnes %s";
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
    return ", igal minutil";
  }
  commaEveryHour() {
    return ", igal tunnil";
  }
  commaEveryX0Years() {
    return ", igal %s. aastal";
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
