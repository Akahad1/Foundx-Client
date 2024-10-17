export default function RootLayout({
  children,
  recentpost,
}: {
  children: React.ReactNode;
  recentpost: React.ReactNode;
}) {
  return (
    <div>
      {children},{recentpost}
    </div>
  );
}
