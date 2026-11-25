# HElkady-egypt-calculators

Mobile calculators PWA: zakat on money and gold, Egyptian electricity bill by tier (editable tariff), percentage and discount, 14% VAT, loan installment, BMI, age, bill splitting.

## بالعربي
مجموعة حاسبات للموبايل: زكاة المال، زكاة الذهب، فاتورة الكهرباء بالشرائح (الأسعار قابلة للتعديل)، نسبة وخصم، ضريبة القيمة المضافة 14%، قسط القرض، مؤشر كتلة الجسم، العمر، وقسمة الفاتورة.

## Run
No build step. It is a static web app (PWA) that works on phones and desktop.

```
npm start        # serves the www folder, open the printed URL
npm test         # logic tests (Node 18+, no dependencies)
```

Deploy: upload the `www` folder to any static host (GitHub Pages, Netlify, Cloudflare Pages). On a phone, open the site and choose "Add to Home Screen" to install it like an app. The same code is already wrapped as an Android project (see below).

## التشغيل
مفيش بناء. افتح `index.html` من خلال أي سيرفر ساكن (`npm start`) أو ارفع مجلد www على GitHub Pages أو Netlify، وعلى الموبايل اختار "إضافة إلى الشاشة الرئيسية".

## Notes
- Electricity default tariff (monthly household, piasters per kWh): 68, 87, 106, 174, 218, 235, 289 for the tiers 0-50, 51-100, 101-200, 201-350, 351-650, 651-1000, over 1000. Source: Egyptian press reports of the tariff announced on 31 July 2026 (e.g. https://www.dostor.org/5754685). Tariffs change, so edit the table in the app. The bill does not include fixed service fees. Two modes: each tier priced separately (default), or the whole consumption priced at its tier rate.
- Zakat uses a nisab of 85 g of 24k gold and a rate of 2.5%. The gold price is entered by you. Rulings differ (silver nisab, debts), so check with a scholar for your case.

## Android app (Capacitor)
The `android/` folder is a ready Android Studio project (app id `com.helkady.calculators`, name "حاسبات مصرية"). The web code lives in `www/` and is copied into the Android project by `cap sync`.

Requirements: Node 18+, JDK 21 (the one bundled with a recent Android Studio is fine), Android Studio with Android SDK Platform 35.

```
npm install
npx cap sync android      # copies www/ into the Android project
npx cap open android      # opens Android Studio, then Run or Build > Build APK(s)
```

Or from the command line (needs JDK 21 and ANDROID_HOME set):

```
cd android
./gradlew assembleDebug
```

The debug APK is at `android/app/build/outputs/apk/debug/app-debug.apk`. Install it with `adb install -r app-debug.apk` or copy it to the phone. After any change in `www/`, run `npx cap sync android` again.

For a Play Store build use Android Studio: Build > Generate Signed Bundle / APK, and create your own keystore (never commit it).

## تطبيق أندرويد (Capacitor)
مجلد `android/` مشروع جاهز لـ Android Studio (معرّف التطبيق `com.helkady.calculators`). كود الويب في `www/` والأمر `cap sync` بينسخه جوه مشروع أندرويد.

المطلوب: Node 18+ و JDK 21 (اللي جاي مع Android Studio الحديث مناسب) و Android SDK Platform 35.

```
npm install
npx cap sync android
npx cap open android      # يفتح Android Studio، بعدين Build > Build APK(s)
```

أو من سطر الأوامر: `cd android && ./gradlew assembleDebug` وملف الـ APK هيكون في `android/app/build/outputs/apk/debug/app-debug.apk`.

لنسخة Google Play استخدم Build > Generate Signed Bundle / APK واعمل keystore خاص بيك ومترفعوش على GitHub.

## License
MIT
