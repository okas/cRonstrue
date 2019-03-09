import chai = require("chai");
import construe from "../src/cronstrue-i18n";
let assert = chai.assert;

describe("i18n", function() {
  describe("de", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "de" }), "Jede Minute");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "de" }),
        "Alle 5 Minuten, zwischen 15:00 und 15:59, Montag bis Freitag"
      );
    });
  });

  describe("es", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "es" }), "Cada minuto");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "es" }),
        "Cada 5 minutos, entre las 03:00 PM y las 03:59 PM, de lunes a viernes"
      );
    });
  });

  describe("fr", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "fr" }), "Toutes les minutes");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "fr" }),
        "Toutes les 5 minutes, de 03:00 PM à 03:59 PM, de lundi à vendredi"
      );
    });
  });

  describe("it", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "it" }), "Ogni minuto");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "it" }),
        "Ogni 5 minuti, tra le 15:00 e le 15:59, lunedì al venerdì"
      );
    });
  });

  describe("nb", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "nb" }), "Hvert minutt");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "nb" }),
        "Hvert 5 minutt, mellom 03:00 PM og 03:59 PM, mandag til og med fredag"
      );
    });
  });

  describe("sv", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "sv" }), "Varje minut");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "sv" }),
        "Var 5 minut, mellan 15:00 och 15:59, måndag till fredag"
      );
    });

    it("0 12 * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "sv" }), "Kl 12:00");
    });

    it("0 15 10 ? * 6#3", function() {
      assert.equal(construe.toString(this.test.title, { locale: "sv" }), "Kl 10:15, den tredje lördagen av månaden");
    });

    it("0 0 15 ? * MON *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "sv" }), "Kl 15:00, varje måndag");
    });
  });

  describe("nl", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "nl" }), "Elke minuut");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "nl" }),
        "Elke 5 minuten, tussen 03:00 PM en 03:59 PM, maandag t/m vrijdag"
      );
    });
  });

  describe("pl", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "pl" }), "Co minutę");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "pl" }),
        "Co 5 minut, od 15:00 do 15:59, od poniedziałek do piątek"
      );
    });
  });

  describe("pt_BR", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "pt_BR" }), "A cada minuto");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "pt_BR" }),
        "A cada 5 minutos, entre 03:00 PM e 03:59 PM, de segunda-feira a sexta-feira"
      );
    });
  });

  describe("ro", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "ro" }), "În fiecare minut");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "ro" }),
        "La fiecare 5 minute, între 15:00 și 15:59, de luni până vineri"
      );
    });
  });

  describe("ru", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "ru" }), "Каждую минуту");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "ru" }),
        "Каждые 5 минут, с 15:00 по 15:59, понедельник по пятница"
      );
    });
  });

  describe("tr", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "tr" }), "Her dakika");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "tr" }),
        "Her 5 dakikada bir, 15:00 ile 15:59 arasında, Pazartesi ile Cuma arasında"
      );
    });
  });

  describe("uk", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "uk" }), "Щохвилини");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "uk" }),
        "Кожні 5 хвилин, між 15:00 та 15:59, понеділок по п'ятниця"
      );
    });
  });

  describe("zh_CN", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "zh_CN" }), "每分钟");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "zh_CN" }),
        "每 5 分钟, 在 03:00 PM 和 03:59 PM 之间, 星期一 到 星期五"
      );
    });
  });

  describe("zh_TW", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "zh_TW" }), "每分鐘");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "zh_TW" }),
        "每 5 分鐘, 在 03:00 PM 和 03:59 PM 之間, 星期一 到 星期五"
      );
    });
  });

  describe("he", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "he" }), "כל דקה");
    });

    it("*/5 15 * * MON-FRI", function() {
      assert.equal(
        construe.toString(this.test.title, { locale: "he" }),
        "כל 5 דקות, 15:00 עד 15:59, יום שני עד יום שישי"
      );
    });
  });

  describe("da", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "da" }), "Hvert minut");
    });
  });

  describe("sl", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "sl" }), "Vsako minuto");
    });
  });

  describe("et", function() {
    it("* * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "et" }), "Iga minut");
    });

    it("* * * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "et" }), "Iga sekund");
    });

    it("10 * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "et" }), "Tunni 10. minutil");
    });

    it("10-35/2 * * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "et" }), "Igal 2. minutil, vahemikus 10 kuni 35");
    });

    it("* 3-5 * * *", function() {
      assert.equal(construe.toString(this.test.title, { locale: "et" }), "Igal minut, vahemikus 03:00 kuni 05:59");
    });
  });
});
