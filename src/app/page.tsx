"use client";

import { useEffect, useState } from "react";
import { useProfile } from "@/hooks/use-profile";
import { ProfileEditor } from "@/components/linktree/profile-editor";
import { ProfileViewer } from "@/components/linktree/profile-viewer";

export default function Home() {
  const profileState = useProfile();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: render nothing until we know whether we're
  // in editor or viewer mode (depends on the hash, which is only readable
  // client-side).
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Minimal placeholder — same dark/light background as the real app so
    // there's no flash of wrong color.
    return (
      <div className="min-h-[100svh] bg-background text-foreground" />
    );
  }

  // The hook switches `mode` to "viewer" when it detects a profile in the
  // hash on first mount. From that point on, the editor and viewer are
  // mutually exclusive.
  if (profileState.mode === "viewer") {
    return <ProfileViewer state={profileState} />;
  }
  return <ProfileEditor state={profileState} />;
}
