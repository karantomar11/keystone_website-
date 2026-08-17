export const metadata = {
  title: 'Privacy Policy — Keystone Privacy Shield',
  description: 'Privacy policy for Keystone Privacy Shield browser extension.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">
          Keystone Privacy Shield — Last updated: August 17, 2026
        </p>

        <Section title="What Keystone Privacy Shield Does">
          <p>
            Keystone Privacy Shield is a browser extension that detects and redacts
            personally identifiable information (PII) — such as names, email addresses,
            and phone numbers — in your AI chat prompts before they are sent to any AI
            service. When the AI responds, Keystone restores the original data locally
            on your device.
          </p>
        </Section>

        <Section title="Data Collection">
          <p className="font-semibold mb-3">
            Keystone Privacy Shield does not collect, transmit, or store any user data
            on external servers.
          </p>
          <p>All processing happens entirely on your device. Specifically:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>No data is sent to our servers. There are no analytics, telemetry, or tracking calls.</li>
            <li>No personal information is collected. The extension detects PII solely to redact it.</li>
            <li>No browsing history is collected. The extension only activates on AI chat pages.</li>
            <li>No cookies are set by the extension.</li>
          </ul>
        </Section>

        <Section title="Data That Stays on Your Device">
          <p>
            The following data is stored locally in your browser using Chrome&apos;s
            storage API and never leaves your device:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>User preferences:</strong> Redaction on/off toggle, entity types to detect.
            </li>
            <li>
              <strong>Placeholder mappings:</strong> The encrypted mapping between redacted
              placeholders and original text, used to restore data in AI responses. These
              mappings are temporary and cleared when you close the tab or manually reset them.
            </li>
          </ul>
        </Section>

        <Section title="Third-Party Services">
          <p>
            Keystone Privacy Shield does not communicate with any third-party services.
            It does not make any network requests. All detection and redaction logic runs
            within the extension bundle on your device.
          </p>
        </Section>

        <Section title="Permissions">
          <div className="overflow-x-auto">
            <table className="w-full text-sm mt-2">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-2 pr-4 font-semibold">Permission</th>
                  <th className="py-2 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">activeTab</td>
                  <td className="py-2">To access the current AI chat page and detect sensitive text</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">scripting</td>
                  <td className="py-2">To inject content scripts that redact PII in input fields</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">storage</td>
                  <td className="py-2">To store your preferences and placeholder mappings locally</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">contextMenus</td>
                  <td className="py-2">To provide right-click redact/restore options</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">Host permissions</td>
                  <td className="py-2">To run on AI chat pages (e.g., chat.openai.com, claude.ai)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Data Sharing">
          <p>
            We do not sell, transfer, or share any user data with third parties. We do not
            use user data for advertising, analytics, or any purpose unrelated to the
            extension&apos;s core function of redacting PII.
          </p>
        </Section>

        <Section title="Children's Privacy">
          <p>
            Keystone Privacy Shield does not knowingly collect any data from children under 13.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            If we update this privacy policy, we will update the &quot;Last updated&quot; date at
            the top of this page.
          </p>
        </Section>

        <Section title="Contact">
          <p>For questions about this privacy policy:</p>
          <ul className="list-none mt-2 space-y-1">
            <li><strong>Company:</strong> Data Dynamics AI FlexCo</li>
            <li><strong>Address:</strong> Biraghigasse 33, 1130 Vienna, Austria</li>
          </ul>
        </Section>

        <div className="mt-16 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 Data Dynamics AI FlexCo — Keystone Privacy Shield
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </section>
  );
}
