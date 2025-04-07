export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">🌐 SmartClinic AI</h1>
        <p className="text-lg italic text-gray-600">
          "Tu oferi servicii medicale de calitate. Noi ne ocupăm de tehnologie."
        </p>
      </section>

      <section className="space-y-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold">👋 Bun venit la SmartClinic AI</h2>
        <p>
          Suntem o agenție de automatizare cu AI dedicată clinicilor medicale și stomatologice. Te ajutăm să economisești timp, să comunici mai eficient cu pacienții și să oferi o experiență modernă și profesionistă.
        </p>
      </section>

      <section className="bg-gray-50 p-4 rounded-xl shadow max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">😩 Probleme pe care le rezolvăm</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Pacienți care nu se prezintă la programări</li>
          <li>Lipsa de timp pentru a răspunde la mesaje și apeluri</li>
          <li>Recenzii negative sau lipsă de feedback</li>
          <li>Lipsă de conținut educațional pe rețelele sociale</li>
        </ul>
      </section>

      <section className="space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold">🤖 Ce oferim</h2>
        <div>
          <h3 className="font-bold">💬 Chatbot AI</h3>
          <ul className="list-disc list-inside">
            <li>Răspunde automat la întrebări frecvente</li>
            <li>Confirmă și reprogramează programări</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">🔁 Automatizări inteligente</h3>
          <ul className="list-disc list-inside">
            <li>Reamintiri automate (SMS/email)</li>
            <li>Solicitare feedback + recenzie Google</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">📲 Conținut AI personalizat</h3>
          <ul className="list-disc list-inside">
            <li>Postări educaționale pentru social media</li>
            <li>Newslettere automate pentru pacienți</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">🌍 Traducere automată</h3>
          <p>Mesaje și pagini în RO / EN / FR pentru pacienți străini</p>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-xl shadow max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">💰 Pachete disponibile</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Plan</th>
              <th className="p-2">Ce include</th>
              <th className="p-2">Preț</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 font-semibold">Starter</td>
              <td className="p-2">Chatbot + Reamintiri automate</td>
              <td className="p-2">149€/lună</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">Standard</td>
              <td className="p-2">+ Content AI + Feedback & Recenzii</td>
              <td className="p-2">249€/lună</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">Premium</td>
              <td className="p-2">+ Traduceri + Dashboard + Suport prioritar</td>
              <td className="p-2">349€/lună</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-sm">🔧 Setup inițial: 200€ (configurare completă + training)</p>
      </section>

      <section className="text-center space-y-2">
        <h2 className="text-xl font-semibold">🎥 Vrei să vezi cum funcționează?</h2>
        <p>Avem demo-uri video și exemple reale.</p>
        <a href="#" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition">Programează un demo</a>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        <p>📧 contact@smartclinic.ai | 📱 +40 755 123 456 | 🌐 www.smartclinic.ai</p>
        <p className="mt-1">Fă-ți clinica mai inteligentă. Cu SmartClinic AI.</p>
      </footer>
    </div>
  );
}