const ladder = [
  { points: '500 points', reward: 'Any hot drink' },
  { points: '1200 points', reward: 'Any starter' },
  { points: '2500 points', reward: '£10 voucher' }
];

export default function LoyaltyPointsLadder() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-card">
      <h3 className="font-heading text-xl font-semibold text-harvest-green">Points ladder</h3>
      <p className="mt-2 text-sm text-harvest-charcoal/80">£1 = 10 points. Earn bonus points on seasonal and local dishes.</p>
      <ul className="mt-4 space-y-3">
        {ladder.map((item) => (
          <li key={item.points} className="flex items-center justify-between rounded-xl bg-harvest-cream px-4 py-3">
            <span className="text-sm font-semibold text-harvest-charcoal">{item.points}</span>
            <span className="text-sm text-harvest-charcoal/70">{item.reward}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-sm text-harvest-charcoal/70">
        <p>Bonus points: seasonal dishes +20%, local items +15%.</p>
        <p>Review +50 points, referral +150 points.</p>
      </div>
    </div>
  );
}
