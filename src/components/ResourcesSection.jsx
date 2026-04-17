import { Download, ExternalLink, Heart } from "lucide-react";
import { FileText, Play } from "lucide-react";
import { getResources } from "../data/resources";

// Resolve JSX icons from the icon-name string stored in data
const ICON_MAP = {
  FileText : <FileText className="w-8 h-8" />,
  Play     : <Play     className="w-8 h-8" />,
};

/**
 * Two-card grid for free downloadable resources and demo session booking.
 */
export default function ResourcesSection() {
  const resources = getResources();

  return (
    <section id="resources" className="py-20 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="pill-badge mx-auto mb-4 w-fit">
            <Download className="w-3.5 h-3.5" />
            الموارد المجانية
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            ابدأ رحلتك <span className="gradient-text">مجاناً</span>
          </h2>
          <p className="text-gray-500 text-base">هدايا مجانية من م. سارة لمساعدتك في تعلمك</p>
        </div>
        <div className="section-divider mb-10" />

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((r) => (
            <div key={r.id} id={r.id} className="resource-card">
              {/* Colour accent strip */}
              <div className={`h-2 bg-gradient-to-r ${r.color}`} />

              <div className="p-6">
                {/* Icon + tag */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${r.color} text-white flex items-center justify-center shadow-md`}
                  >
                    {ICON_MAP[r.iconName]}
                  </div>
                  <span className="text-xs text-teal-600 font-bold bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                    {r.tag}
                  </span>
                </div>

                {/* Text */}
                <h3 className="text-xl font-black text-gray-800 mb-1">{r.title}</h3>
                <p className="text-xs text-gray-400 font-medium mb-3">{r.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{r.desc}</p>

                {/* CTA button */}
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={r.action === "download" ? "Self_Introduction_Questions.pdf" : undefined}
                  id={`${r.id}-btn`}
                  className={`w-full btn-teal bg-gradient-to-r ${r.color} py-3 text-sm`}
                >
                  {r.action === "download"
                    ? <Download    className="w-4 h-4" />
                    : <ExternalLink className="w-4 h-4" />}
                  {r.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8 flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 text-red-400" />
          موارد مجانية من م. سارة — لأن التعليم حق للجميع
        </p>
      </div>
    </section>
  );
}
