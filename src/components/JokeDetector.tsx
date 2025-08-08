import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface JokeResponse {
  emoji: string;
  message: string;
  confidence: string;
}

const JokeDetector = () => {
  const [joke, setJoke] = useState("");
  const [response, setResponse] = useState<JokeResponse | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);

  const uncleResponses: JokeResponse[] = [
    {
      emoji: "✅",
      message: "Confirmed: This is peak uncle joke! Even Velayya uncle would be proud!",
      confidence: "99.9% Uncle Vibes"
    },
    {
      emoji: "🥥",
      message: "Wah! This joke is as classic as coconut oil on hair!",
      confidence: "100% Kerala Uncle Energy"
    },
    {
      emoji: "❌",
      message: "Sorry, this is too modern for uncle vibes. Needs more dad energy!",
      confidence: "12% Uncle Potential"
    },
    {
      emoji: "🧐",
      message: "Hmm... this might be a Dad joke, not an uncle one. Close but no banana leaf!",
      confidence: "45% Uncle Classification"
    },
    {
      emoji: "🍌",
      message: "This joke is riper than bananas in monsoon season!",
      confidence: "87% Authentic Uncle Humor"
    },
    {
      emoji: "😅",
      message: "Uncle approved! This would get laughs at every family function!",
      confidence: "94% Family Gathering Ready"
    },
    {
      emoji: "🤔",
      message: "Needs more 'Ayyo' and 'Machane' to reach full uncle potential!",
      confidence: "33% Traditional Uncle Score"
    },
    {
      emoji: "🎯",
      message: "Perfect uncle joke! Would definitely embarrass nephews and nieces!",
      confidence: "100% Embarrassment Factor"
    }
  ];

  const handleDetectJoke = async () => {
    if (!joke.trim()) return;
    
    setIsDetecting(true);
    
    // Simulate detection delay for fun
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Randomly select a response
    const randomResponse = uncleResponses[Math.floor(Math.random() * uncleResponses.length)];
    setResponse(randomResponse);
    setIsDetecting(false);
  };

  const handleReset = () => {
    setJoke("");
    setResponse(null);
  };

  return (
    <div className="min-h-screen bg-gradient-tropical py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🥥 Kerala Uncle Joke Detector 👨
          </h1>
          <p className="text-lg text-muted-foreground">
            The most scientific way to verify your uncle jokes! Powered by coconut wisdom.
          </p>
        </div>

        {/* Main Card */}
        <Card className="shadow-warm border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-card-foreground">
              Enter Your Joke Below 👇
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Input Section */}
            <div className="space-y-4">
              <Textarea
                placeholder="Type or paste your joke here... (e.g., 'Why did the coconut go to therapy? Because it had too many issues to crack!')"
                value={joke}
                onChange={(e) => setJoke(e.target.value)}
                className="min-h-[120px] bg-input border-border text-lg resize-none"
                disabled={isDetecting}
              />
              
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handleDetectJoke}
                  disabled={!joke.trim() || isDetecting}
                  className="bg-gradient-kerala text-primary-foreground hover:shadow-kerala transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg font-semibold"
                >
                  {isDetecting ? (
                    <>
                      <span className="animate-spin mr-2">🥥</span>
                      Detecting...
                    </>
                  ) : (
                    <>
                      🔍 Detect Uncle Joke
                    </>
                  )}
                </Button>
                
                {response && (
                  <Button
                    onClick={handleReset}
                    variant="secondary"
                    className="px-6 py-3"
                  >
                    Try Another
                  </Button>
                )}
              </div>
            </div>

            {/* Results Section */}
            {response && (
              <div className="mt-8 p-6 bg-gradient-coconut rounded-xl border border-border shadow-warm animate-in slide-in-from-bottom-4 duration-500">
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-bounce-gentle">
                    {response.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-accent-foreground mb-3">
                    Detection Results
                  </h3>
                  <p className="text-lg text-foreground mb-4 leading-relaxed">
                    {response.message}
                  </p>
                  <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm">
                    {response.confidence}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-muted-foreground">
          <p className="text-sm">
            Disclaimer: Results are 100% scientific* (*not actually scientific, just for laughs!)
          </p>
          <p className="text-xs mt-2">
            Made with ❤️ and coconut oil in Kerala
          </p>
        </div>
      </div>
    </div>
  );
};

export default JokeDetector;