

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     <h2>Navitem inner leyout item</h2>
        {children}
    </> 
  );
}
